import { useState } from "react";
import "./contact.scss"
import { send } from 'emailjs-com';

export default function Contact() {
    const [message,setMessage] = useState(false)

    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
      });

    const handleSubmit = (e)=>{
        e.preventDefault();
        setMessage(true);
        send(
            'service_14haijg',
            'template_qr1bo5v',
            toSend,
            'Z-KW1dyiKQ5KoDQCy'
            )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
            }
    

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
    
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Your Email" value={toSend.from_name} onChange={handleChange} name='from_name'/>
                    <textarea placeholder="Message" value={toSend.message} onChange={handleChange} name='message'></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I'll reply ASAP!</span>}
                </form>
            </div>
        </div>
    )
}

// import { useState } from "react";
// import "./contact.scss"
// import { send } from 'emailjs-com';

// export default function Contact() {
//     const [toSend, setToSend] = useState({
//         from_name: '',
//         to_name: '',
//         message: '',
//         reply_to: '',
//       });

//     const handleSubmit = (e)=>{
//         e.preventDefault();
//         e.preventDefault();
//         send(
//         'service_14haijg',
//         'TEMPLATE ID',
//         toSend,
//         'User ID'
//         )
//         .then((response) => {
//             console.log('SUCCESS!', response.status, response.text);
//         })
//         .catch((err) => {
//             console.log('FAILED...', err);
//         });
//         }

//     const handleChange = (e) => {
//         setToSend({ ...toSend, [e.target.name]: e.target.value });
//     };

//     return (
//         <div className="contact" id="contact">
//             <div className="left">
//                 <img src="assets/shake.svg" alt="" />
//             </div>
//             <div className="right">
//                 <h2>Contact.</h2>
//                 <form onSubmit={handleSubmit}>
//                     <input type="text" placeholder="Email" value={toSend.from_name} onChange={handleChange}/>
//                     <textarea placeholder="Message" value={toSend.message} onChange={handleChange}></textarea>
//                     <button type="submit">Send</button>
//                     {toSend && <span>Thanks, I'll reply ASAP!</span>}
//                 </form>
//             </div>
//         </div>
//     )
// }
