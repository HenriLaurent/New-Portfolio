const app = {
    init: () => {
        document.querySelector('.container-section').style.opacity = "1";
        app.listenerToActions();
        app.iconNav();

    },
    listenerToActions: () => {
        const links = document.querySelectorAll(".link-style");
        for (let link of links) {
            link.addEventListener("click", app.handleClickOnLink);
        }
        const welcomeLink = document.querySelector('.test');
        welcomeLink.addEventListener('click', app.handleWelcomeLink);

        const oclockLink = document.querySelector('.oclock-link');
        oclockLink.addEventListener('click', app.handleOclockLink);

        const backToIntro = document.querySelector('.back-to-intro');
        backToIntro.addEventListener('click', app.handleBackToIntro);
       
    },

    handleBackToIntro: (event) => {
        const oclockArt = document.querySelector('.oclock');
        const intro = document.querySelector('.intro');
        oclockArt.style.transform = "translate(-15rem,0)";
        oclockArt.style.opacity = "0";
        setTimeout(() => {
            
            oclockArt.style.display = "none";
        }, 500);
        intro.style.transform = "translate(0,0)";
        setTimeout(() => {
            
            intro.style.display = "flex";
            setTimeout(() => {
                
                intro.style.opacity = "1";
            }, 400);
        }, 300);
    },

    handleOclockLink: (event) => {
        const intro = document.querySelector('.intro');
        intro.style.transform = "translate(0,-30rem)";
        intro.style.opacity = "0";
        
        setTimeout(() => {
            
            intro.style.display = "none";
        }, 500);
        setTimeout(() => {
            
            const oclock = document.querySelector('.oclock');
            document.querySelector('.oclock-txt').scrollTo(0,0);
            oclock.style.transform = "translate(0,0)";
            oclock.style.display = "flex";
            setTimeout(() => {
                oclock.style.opacity = "1";
    
            }, 500);
        }, 300);


    },

    handleWelcomeLink: (event) => {
        const button = event.target;
        button.style.transition = "opacity .3s";
        button.style.opacity = "0";
        setTimeout(() => {
            button.style.display = "none";
        }, 500);


    },

    handleClickOnLink: (event) => {

        app.hideSkillsBar();
        // get the name of the id of the section targeted
        const idName = event.target.textContent;

        //target de the section that the user want to see
        const targetSection = document.getElementById(idName);

        // Set the opacity of all sections to 0
        const containers = document.querySelectorAll('.container-section');

        for (let container of containers) {
            container.style.opacity = "0";
        }

        // Hide all sections          
            document.getElementById("ACCUEIL").style.display = "none";
            document.getElementById("INFOS").style.display = "none";
            document.getElementById("COMPÉTENCES").style.display = "none";
            document.getElementById("EXPÉRIENCES").style.display = "none";
            document.getElementById("PROJETS").style.display = "none";
            document.getElementById("BLOG").style.display = "none";

        //Reveal the section targeted
        targetSection.style.display = "flex";
        const targetedContainer = targetSection.querySelector('.container-section');
        setTimeout(() => {

            const main = document.getElementById('swup');
            switch (idName) {
                case "ACCUEIL":
                    main.style.backgroundPositionX = "50%";
                    main.style.backgroundPositionY = "0%";
                    break;
                case "INFOS":
                    const oclock = document.querySelector('.oclock');
                    oclock.style.opacity = "0";
                    oclock.style.display = "none";
                    main.style.backgroundPositionX = "-10rem";
                    main.style.backgroundPositionY = "-25rem";
                    break;
                case "COMPÉTENCES":
                    main.style.backgroundPositionX = "0";
                    main.style.backgroundPositionY = "0";
                    
                    break;
                case "EXPÉRIENCES":
                    main.style.backgroundPositionX = "85%";
                    main.style.backgroundPositionY = "10%";
                    break;
                case "PROJETS":
                    main.style.backgroundPositionX = "50%";
                    main.style.backgroundPositionY = "50%";
                    break;
                case "BLOG":
                    main.style.backgroundPositionX = "80%";
                    main.style.backgroundPositionY = "90%";
                    break;
            }
        }, 300);
        setTimeout(() => {
            targetedContainer.style.opacity = "1";
            
            if(targetedContainer.children[0].classList.contains('welcome-title')){
                const button = document.querySelector('.test');
                if(button.style.opacity = "0"){
                    button.style.opacity = "1";
                    button.style.display = "inline-block";
                    }
            }
            if(idName === "COMPÉTENCES"){
                app.showSkillsBar();
            }
        }, 2000);
        
    },
    // call handleMouseOver and handleMouseOut to show or hide icon
    iconNav: () => {
        const links = document.querySelectorAll('.link-style');
        for (let link of links) {
            link.addEventListener("mouseover", app.handleMouseOver);
            link.addEventListener("mouseout", app.handleMouseOut);
        }
    },
    // Show icon if hover on a link in the nav
    handleMouseOver: (event) => {
        const icon = event.target.closest('li').querySelector('img');
        icon.style.display = 'inline-block';
    },
    // Hide icon if mouse leave the link in the nav
    handleMouseOut: (event) => {
        const icon = event.target.closest('li').querySelector('img');
        icon.style.display = 'none';
    },

    showSkillsBar: () => {
        const js = document.querySelector('.javascript-skill');
        const html = document.querySelector('.html-skill');
        const react = document.querySelector('.react-skill');
        const node = document.querySelector('.node-skill');
        js.style.width  = "80%";
        html.style.width = "85%";
        react.style.width = "70%";
        node.style.width = "80%";
    },

    hideSkillsBar: () => {
        const js = document.querySelector('.javascript-skill');
        const html = document.querySelector('.html-skill');
        const react = document.querySelector('.react-skill');
        const node = document.querySelector('.node-skill');
        js.style.width  = "0";
        html.style.width = "0";
        react.style.width = "0";
        node.style.width = "0";
    },
};

document.addEventListener('DOMContentLoaded', app.init);