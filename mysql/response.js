'use strict';

// Using it , to create api response
exports.ok = function (values, res) {
    var data = {
        'status': 200,
        'count': values.length,
        'values': values
    };
    res.json(data);
    res.end();
};