document.querySelector('.box').addEventListener('click', (e)=>{

    let time = 4000;

    anime({
            targets: e.target,
            duration: 4000,
            easing: 'easeInOutQuad',
            width: [{
                value: window.innerWidth,
                duration: time/2
            },
             {
                value: 100,
                duration: time/2
             }],

            height: [{
                value: window.innerHeight,
                duration: time/2
            },
            {
                value:100,
                duration: time/2
            }],
            backgroundColor: [
                {
                    value: '#481139',
                    duration: time/2
                },
                {
                    value: '#fff',
                    duration: time/2
                }
            ],
            rotateZ: [
                {
                    value: '360deg',
                    duration: time/2
                },
                {
                    value: '0deg',
                    duration: time/2
                }
            ]
    });



})