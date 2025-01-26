// ReactDOM.render(
//     <div>
//         <h1>Привет</h1>
//         <h2>Пока</h2>
//     </div>
// , document.getElementById("app"));


// ReactDOM.render(React.createElement('input', {
//     type: 'text',
//     placeholder: 'Введите текст',
//     onClick: () => console.log('Нажатие!'),
//     onMouseEnter: () => console.log('Mouse Over!'),
// }), document.getElementById("app"));


const inputClick = () => console.log("Clicked!")
const mouseOver = () => console.log("Mouse Over!")

const helpText = "Help text, Pidor!"

const elements = (
    <div>
        <h1>{helpText}</h1>
        <input placeholder={helpText} onClick={inputClick} onMouseEnter={mouseOver} />
        <p>{helpText == "Help Text, Pidor!" ? "Yes" : "No"}</p>
    </div>
)

const app = document.getElementById("app")

ReactDOM.render(elements, app)