const todoService = require('../functions/services/todo');

module.exports = async function (context, req) {
    context.log('Javsacript HTTP Trigger function processed a request.');

    context.res = {
        status: 200,
        body: todoService.getTodos(context)
    }
}