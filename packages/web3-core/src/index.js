/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file index.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */


var requestManager = require('web3-requestManager');
var extend = require('./extend.js');

module.exports = {
    packageInit: function (pgk, args) {
        args = Array.prototype.slice.call(args);

        if (!pgk) {
            throw new Error('You need to instantiate using the "new" keyword.');
        }

        if (!args[0]) {
            throw new Error('You must pass in a provider as argument!');
        }

        if (args[0]._requestManager)
            pgk._requestManager = args[0];
        else
            pgk._requestManager = new requestManager.Manager(args[0]);
    },
    extend: extend
};

