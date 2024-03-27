const sql=require('mysql2')
const con= sql.createConnection(
    {
        host:'localhost',
        user:'vasanth',
        password:'vasanth',
        database:'test'
    }
)

function getMobiles(id){
    return new Promise(function(success,reject){
      if(id){

      }
      else{
        con.query(`SELECT * FROM mobiles WHERE id=?`,[is],function(err,rows,col){
            if(err){
                reject(500)
            }
            else{
                success(rows)
            }
        })
      }
    })
}
function addMobile(id, n, p, r, s) {
    return new Promise(function(success,reject){
        con.query(
            `INSERT INTO mobiles ( name, price, ram, storage) VALUES ('${n}', ${p}, ${r}, ${s})`,
            function(err, result) {
                if (err) {
                    reject(500)
                } else {
                    success(rows)
                }
            }
        );
    })
}

function updateMobiles( n, p, r, s,id) {
    return new Promise(function (success,reject){
        con.query(
            `UPDATE mobiles SET name=?,price=?,ram=?,storage=? WHERE id=?`,[n,p,r,s,id],
             function (err,rows,col){
                if(err){
                    reject(500)
                }
                else{
                    success(rows)
                }
             }  
        )
    })
}

function deleteMobiles(id) {
    return new Promise(function (success,reject){
        getMobiles(id)
        .then((rows)=>{
            if(rows.length>0){
                con.query(
                    `DELETE FROM mobiles WHERE id=?`[id],
                     function (err,rows,col){
                        if(err){
                            reject(500)
                        }
                        else{
                            success(rows)
                        }
                     }  
                )
            }
            else{
                reject(404)
            }
        })
    })
}


getMobiles()
addMobile(5,'iphone',30000,8,256)

module.exports={
    getMobiles,
    addMobile,
    updateMobiles,
    deleteMobiles
}