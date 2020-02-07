const generateUsers=(num)=>{
    let  users = []

    for(let i=1;i<=num;i++){
        users.push(faker.helpers.createCard())
    }
    return users 
}
const users = generateUsers(20);

const main = document.querySelector('main').innerHTML
const e = React.createElement;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: users };
  }

   render() {
        const html = users.map(user=>{
            return `
                <div class=user>
                    ${user.name}<br>
                    ${user.username}
                </div>
            `
        }).join("")

        if(user.isFavorite)

        main =  html

//     // if (this.state.liked) {
//     //   return 'You liked this.';
//     }

//     return e(
//       'button',
//       { onClick: () => this.setState({ liked: true }) },
//       'Like'
//     );
  }
  
}


const domContainer = document.querySelector('main');
ReactDOM.render(e(App), domContainer);






const ravRandomizer=()=>{
    users.map(user=>{
        user.isFavorite = Boolean(Math.floor(Math.random()*Math.floor(2)))
    })
}
ravRandomizer();


console.log(users)

