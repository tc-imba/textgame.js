//const _ = require('underscore');
//const game = require('../../textgame');

import game from '../textgame';
import _ from 'underscore';
import Trigger from '../lib/trigger';
import async from 'neo-async';
import pify from 'pify';

export default class TriggerModel {

    constructor() {
        this._triggerNum = 0;
        this._triggerIdMap = {};
        this._triggerNameMap = {};
        this._initEvent = [];
        this._timeEvent = {};
    }

    create(options = {}) {

        const triggerId = this._triggerNum++;
        const trigger = new Trigger(triggerId, options);
        this._triggerIdMap[triggerId] = trigger;

        if (trigger.name && !this._triggerNameMap.hasOwnProperty(trigger.name)) {
            this._triggerNameMap[trigger.name] = trigger;
        }

        // Init events
        if (trigger.event && !_.isArray(trigger.event)) {
            trigger.event = [trigger.event];
        }
        _.each(trigger.event, (value) => {
            this._registerEvent(triggerId, value);
        });

    }

    get(value, type = 'name') {
        if (type === 'id') return this._triggerIdMap[value] || null;
        if (type === 'name') return this._triggerNameMap[value] || null;
    }

    /** Init Events */
    _registerEvent(triggerId, event) {
        event.triggerId = triggerId;
        if (!_.has(event, 'priority')) {
            event.priority = 0;
        }
        if (event.type === 'init') {
            this._registerInitEvent(event);
        } else if (event.type === 'time') {
            if (_.has(event, 'interval') && event.interval > 0) {
                event.interval = Math.ceil(event.interval);
            } else {
                event.interval = 0;
            }
            this._registerTimeEvent(event);
        }
    }

    _registerInitEvent(event) {
        this._initEvent.push(event);
    }

    _registerTimeEvent(event) {
        if (_.has(event, 'end') && game.utils.now() > event.end) {
            return;
        }
        if (!_.has(event, 'start')) {
            event.start = game.utils.now();
        }
        if (_.has(this._timeEvent, event.start)) {
            this._timeEvent[event.start] = [];
        }
        let i = 0;
        for (; i < this._timeEvent[event.start].length; i++) {
            if (this._timeEvent[event.start][i].priority <= event.priority) {
                break;
            }
        }
        this._timeEvent[event.start].splice(i, 0, event);
    }

    _clearTimeEvent(time) {
        this._timeEvent[time] = [];
    }


    async init() {
        await pify(async.each)(
            this._initEvent,
            async (value) => {
                let trigger = this.get(value.triggerId, 'id');
                await this.run(trigger);
            }
        );
    }

    async run(trigger) {
        await trigger.action();
        game.view.reset();
    }


}

//module.exports = TriggerModel;
