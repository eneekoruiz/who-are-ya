// YOUR CODE HERE :
// .... stringToHTML ....
// .... setupRows .....
import { stringToHTML } from "./fragments.js";
import { higher } from "./fragments.js";   
import { lower } from "./fragments.js";

const delay = 350;
const attribs = ['nationality', 'leagueId', 'teamId', 'position', 'birthdate']


let setupRows = function (game) {


    function leagueToFlag(leagueId) {
        // YOUR CODE HERE
        const ligaMap = {
            564: 'es1',
            8: 'en1',
            82: 'de1',
            384: 'it1',
            301: 'fr1'
        };

        return ligaMap[leagueId] || null;
    }


    function getAge(dateString) {
        // YOUR CODE HERE
        const today = new Date();
        const birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();

        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;

    }

    let check = function(theKey, theValue) {
        const balioa = game.solution[theKey];

        if (theKey === "birthdate") {
            const gaur = new Date();
            const jaiotzeData = new Date(balioa);
            const sartutakoData = new Date(theValue);

            let adinaSoluzioa = gaur.getFullYear() - jaiotzeData.getFullYear();
            if (gaur.getMonth() < jaiotzeData.getMonth() ||
                (gaur.getMonth() === jaiotzeData.getMonth() && gaur.getDate() < jaiotzeData.getDate())) {
                adinaSoluzioa--;
            }

            let adinaSartu = gaur.getFullYear() - sartutakoData.getFullYear();
            if (gaur.getMonth() < sartutakoData.getMonth() ||
                (gaur.getMonth() === sartutakoData.getMonth() && gaur.getDate() < sartutakoData.getDate())) {
                adinaSartu--;
            }

            if (adinaSartu === adinaSoluzioa) return "correct";
            else if (adinaSartu < adinaSoluzioa) return "lower";
            else return "higher";
        }

        if (balioa === theValue) return "correct";
        return "incorrect";
    };


    function setContent(guess) {
        console.log(guess);
        return [
            `<img src="https://playfootball.games/media/nations/${guess.nationality.toLowerCase()}.svg" alt="" style="width: 60%;">`,
            `<img src="https://playfootball.games/media/competitions/${leagueToFlag(guess.leagueId)}.png" alt="" style="width: 60%;">`,
            `<img src="https://cdn.sportmonks.com/images/soccer/teams/${guess.teamId % 32}/${guess.teamId}.png" alt="" style="width: 60%;">`,
            `${guess.position}`,
            `${getAge(guess.birthdate)}`
        ]
    }

    function showContent(content, guess) {
        let fragments = '', s = '';
        for (let j = 0; j < content.length; j++) {
            s = "".concat(((j + 1) * delay).toString(), "ms")
            fragments += `<div class="w-1/5 shrink-0 flex justify-center ">
                            <div class="mx-1 overflow-hidden w-full max-w-2 shadowed font-bold text-xl flex aspect-square rounded-full justify-center items-center bg-slate-400 text-white ${check(attribs[j], guess[attribs[j]]) == 'correct' ? 'bg-green-500' : ''} opacity-0 fadeInDown" style="max-width: 60px; animation-delay: ${s};">
                                ${content[j]}
                                ${check(attribs[j], guess[attribs[j]]) == 'higher' ? higher : ''}
                                ${check(attribs[j], guess[attribs[j]]) == 'lower' ? lower : ''}

                            </div>
                         </div>`
        }

        let child = `<div class="flex w-full flex-wrap text-l py-2">
                        <div class=" w-full grow text-center pb-2">
                            <div class="mx-1 overflow-hidden h-full flex items-center justify-center sm:text-right px-4 uppercase font-bold text-lg opacity-0 fadeInDown " style="animation-delay: 0ms;">
                                ${guess.name}
                            </div>
                        </div>
                        ${fragments}`

        let playersNode = document.getElementById('players')
        playersNode.prepend(stringToHTML(child))
    }

    let getPlayer = function (playerId) {
        // YOUR CODE HERE
        return  game.players.find(p=> p.id === Number(playerId));

    }

    return /* addRow */ function (playerId) {
        console.log("Sartutako IDa: " + playerId);
        let guess = getPlayer(playerId.id)
        console.log(guess)

        let content = setContent(guess)
        showContent(content, guess)
    }
}
export { setupRows };
