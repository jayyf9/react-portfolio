import { faAngular } from '@fortawesome/free-brands-svg-icons'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { faNodeJs } from '@fortawesome/free-brands-svg-icons'

var portfolioData = [{
    "id": 0,
    "title": "MultiOne Web",
    "description": "This is a website for a local Cafe trying to get there business online for the first time and wanted a site that simply advertises there services in a classy and modern way. To create an in depth lighting device configuration solution allowing for configuration of device drivers and exporting a project file for programming the devices. Philips Lighting has a software solution available allowing users to configure lighting devices technical features, however, this is a feature rich and deep system and does not cater well to users without a lot of technical knowledge. MultiOne Web has the goal of providing Philips Lighting with a cloud-based replacement to their current software solution. With the aim of being a more fully fledged application providing wide configuration capabilities with a new improved flow and attractive user experience making the process more visual/interactive where possible.",
    "img": require("../../images/portfolio-items/multione-web/multione-web-thumbnail.png"),
    "client": require("../../images/clients/philips.jpg"),
    "siteImages": [
        require("../../images/portfolio-items/multione-web/multione-web-1.png"),
        require("../../images/portfolio-items/multione-web/multione-web-2.png"),
        require("../../images/portfolio-items/multione-web/multione-web-3.png"),
        require("../../images/portfolio-items/multione-web/multione-web-4.png"),
        require("../../images/portfolio-items/multione-web/multione-web-5.png")
    ],
    "skills": [{
            "icon": faPencilAlt,
            "title": "Design"
        },
        {
            "icon": faAngular,
            "title": "Angular"
        },
        {
            "icon": faNodeJs,
            "title": "NodeJS"
        }
    ]
},
{
    "id": 1,
    "title": "Altran Academy",
    "description": "Users can login and search for internal trainings and request enrollment to all trainings as well as request specific course via the external trainings section. Managers will see different menu items where they can review and accept/reject training requests for users.",
    "img": require("../../images/portfolio-items/altran-academy/altran-academy-thumbnail.png"),
    "client": require("../../images/clients/altran.png"),
    "siteImages": [
        require("../../images/portfolio-items/altran-academy/altran-academy1.png"),
        require("../../images/portfolio-items/altran-academy/altran-academy2.png"),
        require("../../images/portfolio-items/altran-academy/altran-academy3.png"),
        require("../../images/portfolio-items/altran-academy/altran-academy4.png"),
        require("../../images/portfolio-items/altran-academy/altran-academy5.png"),
        require("../../images/portfolio-items/altran-academy/altran-academy6.png")
    ],
    "skills": [{
            "icon": faAngular,
            "title": "Angular"
        },
        {
            "icon": faNodeJs,
            "title": "NodeJS"
        }
    ]
},
{
    "id": 2,
    "title": "Factory of the future",
    "description": "This is a website that allows users to look through other recipies uploaded by users and rate/give feedback allow for a communtiy of food lovers to come together.",
    "img": require("../../images/portfolio-items/factory-of-the-future/fotf-thumbnail.png"),
    "client": require("../../images/clients/brainport.jpg"),
    "siteImages": [
        require("../../images/portfolio-items/factory-of-the-future/fotf1.png"),
        require("../../images/portfolio-items/factory-of-the-future/fotf2.png"),
        require("../../images/portfolio-items/factory-of-the-future/fotf3.png"),
        require("../../images/portfolio-items/factory-of-the-future/fotf4.png"),
        require("../../images/portfolio-items/factory-of-the-future/fotf5.png"),
        require("../../images/portfolio-items/factory-of-the-future/fotf6.png"),
        require("../../images/portfolio-items/factory-of-the-future/fotf7.png"),
        require("../../images/portfolio-items/factory-of-the-future/fotf8.png")
    ],
    "skills": [{
        "icon": faAngular,
        "title": "Angular"
    }]
}
]

export default portfolioData;