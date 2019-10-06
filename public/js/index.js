/* eslint-disable */

import '@babel/polyfill';
import { login } from './login';
import { displayMap } from './mapbox';
import { displayAlert } from './alerts';

document.addEventListener('DOMContentLoaded', () => {
    // Logins user
    const loginForm = document.querySelector('.form');

    if (loginForm) {
        loginForm.addEventListener('submit', e => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            login(email, password);
        });
    }

    // Display map
    const mapBox = document.getElementById('map');

    if (mapBox) {
        const locations = JSON.parse(mapBox.dataset.locations);
        displayMap(locations);
    }
});