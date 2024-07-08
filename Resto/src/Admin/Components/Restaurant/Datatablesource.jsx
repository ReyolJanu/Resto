export const userColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field:"user", headerName:"User", width:230, renderCell:(params)=>{
    return (
      <div className="cellWithImg">
        <img className="cellImg" src={params.row.img}/>
        {params.row.username}
      </div>
    )
  } },
  {
    field:"email", 
    headerName:"Email",
    width: 230,
  },
  {
    field:"age", 
    headerName:"Age",
    width: 100,
  },

]

export const userRows = [
  { id: 1, 
    username: 'Joyson',
    img: '',
    email: 'joyjoyson1999@gmail.com', 
    age: 25 },
    { id: 1, 
      username: 'Joyson',
      img: '',
      email: 'joyjoyson1999@gmail.com', 
      age: 25 },
      { id: 1, 
        username: 'Joyson',
        img: '',
        email: 'joyjoyson1999@gmail.com', 
        age: 25 },
        { id: 1, 
          username: 'Joyson',
          img: '',
          email: 'joyjoyson1999@gmail.com', 
          age: 25 },
          { id: 1, 
            username: 'Joyson',
            img: '',
            email: 'joyjoyson1999@gmail.com', 
            age: 25 },
            { id: 1, 
              username: 'Joyson',
              img: '',
              email: 'joyjoyson1999@gmail.com', 
              age: 25 },
              { id: 1, 
                username: 'Joyson',
                img: '',
                email: 'joyjoyson1999@gmail.com', 
                age: 25 },
                { id: 1, 
                  username: 'Joyson',
                  img: '',
                  email: 'joyjoyson1999@gmail.com', 
                  age: 25 },
                  { id: 1, 
                    username: 'Joyson',
                    img: '',
                    email: 'joyjoyson1999@gmail.com', 
                    age: 25 },
                    { id: 1, 
                      username: 'Joyson',
                      img: '',
                      email: 'joyjoyson1999@gmail.com', 
                      age: 25 }
  
  
];