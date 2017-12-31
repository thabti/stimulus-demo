const { Application, Controller } = require('stimulus'); 
class HelloController extends Controller {
    connect() {
        console.log('mic check')
    }
    
    greet() {
        console.log('hello mate', this)
        this.name = 'notsabeur'
    }
}

const application = Application.start();
application.register('hello', HelloController);
