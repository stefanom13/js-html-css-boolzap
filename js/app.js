const app = new Vue({
    el:'#app',
    data:{
        contacts: [
            {
                name:'Michele',
                avatar:'img/avatar1.png',
                visible: true,
                messages: [{
                    date:'10/04/2021 15:30:44',
                    message: 'Ciao Michele, come procede il tuo progetto?',
                    status:'sent',
                },
                {
                    date:'10/04/2021 15:32:24',
                    message: 'Ciao Stefano, va tutto molto bene dovrei finire entro una settimana. Tu come stai?',
                    status:'received',
                },
                {
                    date:'10/04/2021 16:22:24',
                    message: 'Grandioso,sono contento per il tuo progetto. io sto bene, tu come stai?',
                    status:'sent',
                },
                {
                    date:'10/04/2021 17:52:54',
                    message: 'Un po stanco per via del lavoro, ma in fin dei conti tutto bene grazie',
                    status:'received',
                },
            ]
            },
            {
                name:'Giulia',
                avatar:'img/avatar5.png',
                visible: true,
                messages: [{
                    date:'11/04/2021 09:30:44',
                    message: 'Ehi Giulia buongiorno, mi passeresti a predendere stamani?',
                    status:'sent',
                },
                {
                    date:'10/04/2021 09:32:24',
                    message: 'Ciao Stefano, certo 10.15 pronto',
                    status:'received',
                },
                {
                    date:'10/04/2021 09:33:12',
                    message: 'Perfetto grazie mille',
                    status:'sent',
                },
                {
                    date:'10/04/2021 10:14:54',
                    message: 'Scendi sono giù',
                    status:'received',
                },
            ]
            },
            {
                name:'Enzo',
                avatar:'img/avatar2.png',
                visible: true,
                messages: [{
                    date:'11/04/2021 09:30:44',
                    message: 'Vieni a giocare a beach volley?',
                    status:'sent',
                },
                {
                    date:'10/04/2021 09:32:24',
                    message: 'yes, a che ora?',
                    status:'received',
                },
                {
                    date:'10/04/2021 09:33:12',
                    message: 'Ci vediamo alle 15 da Aldo e andiamo insieme',
                    status:'sent',
                },
                {
                    date:'10/04/2021 10:14:54',
                    message: 'Amazing, a dopo.',
                    status:'received',
                },
            ]
            },
            {
                name:'Aldo',
                avatar:'img/avatar3.png',
                visible: true,
                messages: [{
                    date:'11/04/2021 08:30:44',
                    message: 'Ci vediamo alle 15 da te e scendiamo?',
                    status:'sent',
                },
                {
                    date:'10/04/2021 08:32:24',
                    message: 'Si ok, oggi sarà presente anche Lorenzo',
                    status:'received',
                },
                {
                    date:'10/04/2021 08:33:12',
                    message: 'Ottimo, cosi alziamo il livello!',
                    status:'sent',
                },
                {
                    date:'10/04/2021 08:14:54',
                    message: 'Preparati a perdere :)',
                    status:'received',
                },
            ]
            },
            {
                name:'Cosimo',
                avatar:'img/avatar4.png',
                visible: true,
                messages: [{
                    date:'11/04/2021 18:30:44',
                    message: 'Domani ore 9:00 appuntamento in centro',
                    status:'sent',
                },
                {
                    date:'10/04/2021 18:32:24',
                    message: 'Perfetto, solo che alle 10 devo andare dal medico',
                    status:'received',
                },
                {
                    date:'10/04/2021 18:33:12',
                    message: 'Tranquillo, vai pure ci sono io',
                    status:'sent',
                },
                {
                    date:'10/04/2021 18:14:54',
                    message: 'Grazie, ti devo un favore!',
                    status:'received',
                },
            ]
            },
            
        ],
    },
    
},
)
