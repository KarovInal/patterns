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

export class UserAdapter extends User {
  constructor() {
    super();
  }

  request() {
    let result;
    console.log(`start request by ${this.type}`);

    result = this.requestUser();

    console.log('response data' + result);

    return result;
  }
}

export class AdminAdapter extends Admin {
  constructor() {
    super();
  }

  request() {
    let result;
    console.log(`start request by ${this.type}`);

    result = this.requestAdmin();

    console.log('response data' + result);
    
    return result;
  }
}

let admin = new AdminAdapter;
admin.request();