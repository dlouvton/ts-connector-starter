/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */


/** @module connector **/
import {VendorConnector, TelephonyConnector, InitResult, GenericResult, ActiveCallsResult, CallResult} from '@salesforce/scv-connector-base';

/** 
 * Class representing a Service Cloud Voice Demo Common Connector 
 */
export class Connector extends VendorConnector {
    constructor() {
        super();
    }
    /**
     * Returns the Telephony Connector (if implemented)
     */
    getTelephonyConnector() {
        return Promise.resolve(new TelephonyConnector());
    }
    /**
     * Called by SFDC to initialize the connector
     * @param {object} callCenterConfig - SFDC Contact Center Settings
     */
    init() {
        return Promise.resolve(new InitResult({}));
    }

    /**
     * Called when agent sets their status/presence (i.e. when changing from
     * Available to Offline) 
     * @param {string} agentStatus agent status, Constants.AGENT_STATUS.ONLINE or Constants.AGENT_STATUS.OFFLINE
     * @param {AgentStatusInfo} agentStatusInfo object contains statusId, statusApiName and statusName
     * @param {boolean} enqueueNextState true if the state should be enqueued, which will update the agent's status after a call ends
     */
    setAgentStatus() {
        return Promise.resolve(new GenericResult({success : true}));;
    }
    /**
     * Sends non-voice agent work events to vendor such as work accepted, declined, etc
     * @param {AgentWork} agentWork
     * 
     */
    onAgentWorkEvent() {
        return null;
    }
}


export class PhoneConnector extends TelephonyConnector {
    /**
     * Called when the connector is loaded, to request the active calls
     */
    getActiveCalls() {
        return Promise.resolve(new ActiveCallsResult({}));
    }
    /**
     * Called when call is accepted on the omni widget
     * @param {PhoneCall} call
     */
    acceptCall() {
        return Promise.resolve(new CallResult({ }));
    }
}