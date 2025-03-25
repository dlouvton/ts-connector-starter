import { initializeConnector } from '@salesforce/scv-connector-base';
import { Connector } from './connector';

const connector = new Connector();
window.addEventListener('load', () => {
    initializeConnector(connector);
});