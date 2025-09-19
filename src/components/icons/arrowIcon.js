const ArrowIcon = ({ isOpen }) => {
    return (
        <svg className={`ml-1 h-4 w-4 transform ${isOpen ? 'rotate-180' : ''} transition-transform duration-200`} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
    )
};
// const ArrowIcon = () => {
//     return (
//         <svg
//             aria-hidden="true"
//             focusable="false"
//             data-prefix="fas"
//             data-icon="caret-down"
//             className="svg-inline--fa fa-caret-down fa-w-10"
//             role="img"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 320 512"
//             style={{
//                 marginLeft: '7px',
//                 color: '#5cb900',
//                 verticalAlign: 'middle',
//                 fontSize: '14px'
//             }}
//         >
//             <path
//                 fill="currentColor"
//                 d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
//             />
//         </svg>
//     )
// }
export default ArrowIcon;