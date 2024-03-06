import { smooth } from "./smooth";

export function link() {
    document.querySelectorAll("a[href^='#']").forEach((anchor) => {
        anchor.addEventListener("click", function(e){
            e.prventDefault();

            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if(targetElement){
                targetElement.scrollIntoView({ behavior: "smooth"} );
            }
        });
    });
}