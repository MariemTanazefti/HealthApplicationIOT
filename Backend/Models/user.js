const mysql = require('mysql2');
const db =require('../database')  

module.exports=class User{
static getAll(){
    return db.execute('select * from user');
}

static save(name,email,password){
    return db.execute('insert into user (name,email,password) values (?,?,?)',[name,email,password]);
    
}

static update(id,name,email,password){
    console.log([name,email,password,id])
    return db.execute('update user SET name = ?, email = ?, password = ? where id = ?',
    [name,email,password,id])

}


static findOne(email,password){
    return db.execute('select * from user where email = ? and password = ?',[email,password]);

}
static findById(id){
    return db.execute('select name from user where id = ? ',[id])
}





};
