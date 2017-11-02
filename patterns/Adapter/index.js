class User {
  constructor() {
    this.type = 'User';
  }

  requestUser() {
    return {
      name: 'Петя',
      messages: []
    }
  }
}

class Admin {
  constructor() {
    this.type = 'Admin';
  }

  requestAdmin() {
    return {
      name: 'Вася',
      messages: []
    }
  }
}

class UserAdapter extends User {
  constructor() {
    super();
  }

  request() {
    let result;
    console.log(`start request by ${this.type}`);

    result = this.requestAdmin();

    console.log('response data' + result);   
  }
}

class AdminAdapter extends Admin {
  constructor() {
    super();
  }

  request() {
    let result;
    console.log(`start request by ${this.type}`);

    result = this.requestAdmin();

    console.log('response data' + result);    
  }
}

let admin = new AdminAdapter;
admin.request();