const assert = require('chai').assert;
const app = require('../app');
const createTodolistService = require('../client/src/components/slackbot/todolist/todolist-service');

describe('App', function () {
    describe('sayHello', function () {
        it('app should return hello', function () {
            let result = app.sayHello();
            assert.equal(result, 'hello');
        });

        it('sayHello should return type string', function () {
            let result = app.sayHello();
            assert.typeOf(result, 'string');
        });
    });

    describe('addNumbers', function () {
        it('addNumbers result should be more than 5', function () {
            let result = app.addNumbers(5, 6);
            assert.isAbove(result, 5);
        });

        it('addNumbers should return a result of type number', function () {
            let result = app.addNumbers(5, 6);
            assert.typeOf(result, 'number');
        });
    });

    describe('Test for todolist-service.js', function () {
        const widgetData_createTodolistService = {
            id: '',
            commandEntered: 'add a task to todolist for completing testing by today.',
            widgetName: 'todolist',
            task: 'completing testing by today-test cases',
            userId: 'testUser1',
            creatDate: '12/12/2012',
            creatTime: '12:12:12',
            currentdateTime: '12/12/2012 12:12:12',
            botResponse: '',
            taskCompleted: 'unchecked',
          };
        it('todolist task should get created. test -1', function () {
            createTodolistService(widgetData_createTodolistService).then((firebaseTodolistdRes)=>{
                assert.typeOf(firebaseTodolistdRes.id, 'string');
            });
        });

    });
});



