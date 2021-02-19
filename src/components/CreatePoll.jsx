import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {Container, Row, Col} from 'react-grid-system';

import {createPoll} from "../store/actions";

import {withRouter} from 'react-router-dom';

const BLUE = "blue";
const RED = "red";

function CreatePoll(props) {

    const [currentPick, setCurrentPick] = useState('');
    const [hovered, setHovered] = useState('');
    const [hoveredImg, setHoveredImg] = useState('');

    const [topBlue, setTopBlue] = useState('');
    const [jungleBlue, setJungleBlue] = useState('');
    const [midBlue, setMidBlue] = useState('');
    const [botBlue, setBotBlue] = useState('');
    const [supportBlue, setSupportBlue] = useState('');
    const [topRed, setTopRed] = useState('');
    const [jungleRed, setJungleRed] = useState('');
    const [midRed, setMidRed] = useState('');
    const [botRed, setBotRed] = useState('');
    const [supportRed, setSupportRed] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        const state = {
            topBlue: topBlue,
            jungleBlue: jungleBlue,
            midBlue: midBlue,
            botBlue: botBlue,
            supportBlue: supportBlue,
            topRed: topRed,
            jungleRed: jungleRed,
            midRed: midRed,
            botRed: botRed,
            supportRed: supportRed,
            options: [BLUE, RED]
        };
        props.createPoll(state);
    };

    useEffect(() => {
        function setChampion() {
            setHovered(hovered);
            setCurrentPick(currentPick);
            if (currentPick && hovered) {
                switch (currentPick) {
                    case "topBlue":
                        setTopBlue(hovered);
                        break;
                    case "topRed":
                        setTopRed(hovered);
                        break;
                    case "jungleBlue":
                        setJungleBlue(hovered);
                        break;
                    case "jungleRed":
                        setJungleRed(hovered);
                        break;
                    case "midBlue":
                        setMidBlue(hovered);
                        break;
                    case "midRed":
                        setMidRed(hovered);
                        break;
                    case "botBlue":
                        setBotBlue(hovered);
                        break;
                    case "botRed":
                        setBotRed(hovered);
                        break;
                    case "supportBlue":
                        setSupportBlue(hovered);
                        break;
                    case "supportRed":
                        setSupportRed(hovered);
                        break;
                    default:
                        console.log("default!")
                }
                let hoveredEl = document.getElementById(hovered);
                if (hoveredEl.classList.contains("champion-selected")) {
                    hoveredEl.classList.remove("champion-selected");
                }
                let pickEl = document.getElementById(currentPick);
                if (pickEl.classList.contains("pick-selected")) {
                    pickEl.classList.remove("pick-selected");
                }
                console.log("pickImg")
                let a = pickEl.getElementsByTagName('img')
                a[0].src = hoveredImg.src
                a[0].alt = hoveredImg.alt
                console.log(a[0].src)
                setHovered('');
                setCurrentPick('');
            }
        }

        setChampion()
    }, [currentPick, hovered]);

    const handleHover = e => {
        let el = e.target;
        if (el.tagName !== 'DIV') {
            el = el.parentNode;
        }
        let elImg = el.firstElementChild;
        if (hovered) {
            let hoveredEl = document.getElementById(hovered);
            if (el === hoveredEl) {
                if (el.classList.contains("champion-selected")) {
                    el.classList.remove("champion-selected");
                }
                setHovered('');
                setHoveredImg('');
            } else {
                if (hoveredEl.classList.contains("champion-selected")) {
                    hoveredEl.classList.remove("champion-selected");
                }
                el.classList.add("champion-selected");
                setHovered(el.id);
                setHoveredImg(elImg);
            }
        } else {
            el.classList.add("champion-selected");
            setHovered(el.id);
            setHoveredImg(elImg);
        }
    };

    const handleCurrentPick = e => {
        let el = e.target;
        if (el.tagName !== 'DIV') {
            el = el.parentNode;
        }
        let pick = document.getElementById(el.id);

        if (currentPick) {
            let currentPickEl = document.getElementById(currentPick);
            if (pick === currentPickEl) {
                if (pick.classList.contains("pick-selected")) {
                    pick.classList.remove("pick-selected");
                }
                setCurrentPick('');
            } else {
                if (currentPickEl.classList.contains("pick-selected")) {
                    currentPickEl.classList.remove("pick-selected");
                }
                pick.classList.add("pick-selected");
                setCurrentPick(pick.id)
            }
        } else {
            pick.classList.add("pick-selected");
            setCurrentPick(pick.id);
        }
    };

    const handleRightClick = e => {
        e.preventDefault();
        console.log("right clicked")
    };

    return (
        <div className="form">

            <form onSubmit={e => handleSubmit(e)}>
                <input
                    type='hidden'
                    name='topBlue'
                    value={topBlue}
                />
                <input
                    type='hidden'
                    name='jungleBlue'
                    value={jungleBlue}
                />
                <input
                    type='hidden'
                    name='midBlue'
                    value={midBlue}
                />
                <input
                    type='hidden'
                    name='botBlue'
                    value={botBlue}
                />
                <input
                    type='hidden'
                    name='supportBlue'
                    value={supportBlue}
                />
                <input
                    type='hidden'
                    name='topRed'
                    value={topRed}
                />
                <input
                    type='hidden'
                    name='jungleRed'
                    value={jungleRed}
                />
                <input
                    type='hidden'
                    name='midRed'
                    value={midRed}
                />
                <input
                    type='hidden'
                    name='botRed'
                    value={botRed}
                />
                <input
                    type='hidden'
                    name='supportRed'
                    value={supportRed}
                />
                <div className="buttons_center">
                    <button
                        className="button"
                        type='submit'>
                        Submit
                    </button>
                </div>
            </form>
            <Container>
                <Row>
                    <Col sm={2}>
                        <div className="blue-side">
                            <div className="pick-container" id="topBlue" onClick={(e) => handleCurrentPick(e)}
                                 onContextMenu={e => handleRightClick(e)}>
                                <img
                                    src="http://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/-1.png"
                                    alt="none"/>
                                <p>&nbsp;{topBlue}</p>
                            </div>
                            <div className="pick-container" id="jungleBlue" onClick={(e) => handleCurrentPick(e)}
                                 onContextMenu={e => handleRightClick(e)}>
                                <img
                                    src="http://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/-1.png"
                                    alt="none"/>
                                <p>&nbsp;{jungleBlue}</p>
                            </div>
                            <div className="pick-container" id="midBlue" onClick={(e) => handleCurrentPick(e)}
                                 onContextMenu={e => handleRightClick(e)}>
                                <img
                                    src="http://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/-1.png"
                                    alt="none"/>
                                <p>&nbsp;{midBlue}</p>
                            </div>
                            <div className="pick-container" id="botBlue" onClick={(e) => handleCurrentPick(e)}
                                 onContextMenu={e => handleRightClick(e)}>
                                <img
                                    src="http://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/-1.png"
                                    alt="none"/>
                                <p>&nbsp;{botBlue}</p>
                            </div>
                            <div className="pick-container" id="supportBlue" onClick={(e) => handleCurrentPick(e)}
                                 onContextMenu={e => handleRightClick(e)}>
                                <img
                                    src="http://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/-1.png"
                                    alt="none"/>
                                <p>&nbsp;{supportBlue}</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={8}>
                        <div className="champions">
                            <div className="champion-container" id="Aatrox" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Aatrox.png"
                                     alt="Aatrox"/>
                            </div>
                            <div className="champion-container" id="Ahri" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Ahri.png"
                                     alt="Ahri"/>
                            </div>
                            <div className="champion-container" id="Akali" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Akali.png"
                                     alt="Akali"/>
                            </div>
                            <div className="champion-container" id="Alistar" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Alistar.png"
                                     alt="Alistar"/>
                            </div>
                            <div className="champion-container" id="Amumu" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Amumu.png"
                                     alt="Amumu"/>
                            </div>
                            <div className="champion-container" id="Anivia" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Anivia.png"
                                     alt="Anivia"/>
                            </div>
                            <div className="champion-container" id="Annie" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Annie.png"
                                     alt="Annie"/>
                            </div>
                            <div className="champion-container" id="Aphelios" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Aphelios.png"
                                     alt="Aphelios"/>
                            </div>
                            <div className="champion-container" id="Ashe" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Ashe.png"
                                     alt="Ashe"/>
                            </div>
                            <div className="champion-container" id="AurelionSol" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/AurelionSol.png"
                                     alt="AurelionSol"/>
                            </div>
                            <div className="champion-container" id="Azir" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Azir.png"
                                     alt="Azir"/>
                            </div>

                            <div className="champion-container" id="Bard" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Bard.png"
                                     alt="Bard"/>
                            </div>
                            <div className="champion-container" id="Blitzcrank" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Blitzcrank.png"
                                     alt="Blitzcrank"/>
                            </div>
                            <div className="champion-container" id="Brand" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Brand.png"
                                     alt="Brand"/>
                            </div>
                            <div className="champion-container" id="Braum" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Braum.png"
                                     alt="Braum"/>
                            </div>
                            <div className="champion-container" id="Caitlyn" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Caitlyn.png"
                                     alt="Caitlyn"/>
                            </div>
                            <div className="champion-container" id="Camille" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Camille.png"
                                     alt="Camille"/>
                            </div>
                            <div className="champion-container" id="Cassiopeia" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Cassiopeia.png"
                                     alt="Cassiopeia"/>
                            </div>
                            <div className="champion-container" id="Chogath" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Chogath.png"
                                     alt="Chogath"/>
                            </div>
                            <div className="champion-container" id="Corki" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Corki.png"
                                     alt="Corki"/>
                            </div>
                            <div className="champion-container" id="Darius" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Darius.png"
                                     alt="Darius"/>
                            </div>
                            <div className="champion-container" id="Diana" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Diana.png"
                                     alt="Diana"/>
                            </div>
                            <div className="champion-container" id="DrMundo" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/DrMundo.png"
                                     alt="DrMundo"/>
                            </div>
                            <div className="champion-container" id="Draven" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Draven.png"
                                     alt="Draven"/>
                            </div>
                            <div className="champion-container" id="Ekko" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Ekko.png"
                                     alt="Ekko"/>
                            </div>
                            <div className="champion-container" id="Elise" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Elise.png"
                                     alt="Elise"/>
                            </div>
                            <div className="champion-container" id="Evelynn" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Evelynn.png"
                                     alt="Evelynn"/>
                            </div>
                            <div className="champion-container" id="Azir" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Ezreal.png"
                                     alt="Ezreal"/>
                            </div>
                            <div className="champion-container" id="Fiddlesticks" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Fiddlesticks.png"
                                     alt="Fiddlesticks"/>
                            </div>
                            <div className="champion-container" id="Fiora" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Fiora.png"
                                     alt="Fiora"/>
                            </div>
                            <div className="champion-container" id="Fizz" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Fizz.png"
                                     alt="Fizz"/>
                            </div>
                            <div className="champion-container" id="Galio" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Galio.png"
                                     alt="Galio"/>
                            </div>
                            <div className="champion-container" id="Gangplank" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Gangplank.png"
                                     alt="Gangplank"/>
                            </div>
                            <div className="champion-container" id="Garen" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Garen.png"
                                     alt="Garen"/>
                            </div>
                            <div className="champion-container" id="Gnar" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Gnar.png"
                                     alt="Gnar"/>
                            </div>
                            <div className="champion-container" id="Gragas" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Gragas.png"
                                     alt="Gragas"/>
                            </div>
                            <div className="champion-container" id="Graves" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Graves.png"
                                     alt="Graves"/>
                            </div>
                            <div className="champion-container" id="Hecarim" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Hecarim.png"
                                     alt="Hecarim"/>
                            </div>
                            <div className="champion-container" id="Heimerdinger" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Heimerdinger.png"
                                     alt="Heimerdinger"/>
                            </div>
                            <div className="champion-container" id="Illaoi" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Illaoi.png"
                                     alt="Illaoi"/>
                            </div>
                            <div className="champion-container" id="Irelia" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Irelia.png"
                                     alt="Irelia"/>
                            </div>
                            <div className="champion-container" id="Ivern" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Ivern.png"
                                     alt="Ivern"/>
                            </div>
                            <div className="champion-container" id="Janna" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Janna.png"
                                     alt="Janna"/>
                            </div>
                            <div className="champion-container" id="JarvanIV" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/JarvanIV.png"
                                     alt="JarvanIV"/>
                            </div>
                            <div className="champion-container" id="Jax" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Jax.png"
                                     alt="Jax"/>
                            </div>
                            <div className="champion-container" id="Jayce" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Jayce.png"
                                     alt="Jayce"/>
                            </div>
                            <div className="champion-container" id="Jhin" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Jhin.png"
                                     alt="Jhin"/>
                            </div>
                            <div className="champion-container" id="Jinx" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Jinx.png"
                                     alt="Jinx"/>
                            </div>
                            <div className="champion-container" id="Kaisa" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Kaisa.png"
                                     alt="Kaisa"/>
                            </div>
                            <div className="champion-container" id="Kalista" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Kalista.png"
                                     alt="Kalista"/>
                            </div>
                            <div className="champion-container" id="Karma" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Karma.png"
                                     alt="Karma"/>
                            </div>
                            <div className="champion-container" id="Karthus" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Karthus.png"
                                     alt="Karthus"/>
                            </div>
                            <div className="champion-container" id="Kassadin" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Kassadin.png"
                                     alt="Kassadin"/>
                            </div>
                            <div className="champion-container" id="Katarina" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Katarina.png"
                                     alt="Katarina"/>
                            </div>
                            <div className="champion-container" id="Kayle" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Kayle.png"
                                     alt="Kayle"/>
                            </div>
                            <div className="champion-container" id="Kayn" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Kayn.png"
                                     alt="Kayn"/>
                            </div>
                            <div className="champion-container" id="Kennen" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Kennen.png"
                                     alt="Kennen"/>
                            </div>
                            <div className="champion-container" id="Khazix" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Khazix.png"
                                     alt="Khazix"/>
                            </div>
                            <div className="champion-container" id="Kindred" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Kindred.png"
                                     alt="Kindred"/>
                            </div>
                            <div className="champion-container" id="Kled" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Kled.png"
                                     alt="Kled"/>
                            </div>
                            <div className="champion-container" id="KogMaw" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/KogMaw.png"
                                     alt="KogMaw"/>
                            </div>
                            <div className="champion-container" id="Leblanc" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Leblanc.png"
                                     alt="Leblanc"/>
                            </div>
                            <div className="champion-container" id="LeeSin" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/LeeSin.png"
                                     alt="LeeSin"/>
                            </div>
                            <div className="champion-container" id="Leona" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Leona.png"
                                     alt="Leona"/>
                            </div>
                            <div className="champion-container" id="Lillia" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Lillia.png"
                                     alt="Lillia"/>
                            </div>
                            <div className="champion-container" id="Lissandra" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Lissandra.png"
                                     alt="Lissandra"/>
                            </div>
                            <div className="champion-container" id="Lucian" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Lucian.png"
                                     alt="Lucian"/>
                            </div>
                            <div className="champion-container" id="Lulu" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Lulu.png"
                                     alt="Lulu"/>
                            </div>
                            <div className="champion-container" id="Lux" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Lux.png"
                                     alt="Lux"/>
                            </div>
                            <div className="champion-container" id="Malphite" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Malphite.png"
                                     alt="Malphite"/>
                            </div>
                            <div className="champion-container" id="Malzahar" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Malzahar.png"
                                     alt="Malzahar"/>
                            </div>
                            <div className="champion-container" id="Maokai" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Maokai.png"
                                     alt="Azir"/>
                            </div>
                            <div className="champion-container" id="MasterYi" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/MasterYi.png"
                                     alt="MasterYi"/>
                            </div>
                            <div className="champion-container" id="MissFortune" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/MissFortune.png"
                                     alt="MissFortune"/>
                            </div>
                            <div className="champion-container" id="Mordekaiser" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Mordekaiser.png"
                                     alt="Mordekaiser"/>
                            </div>
                            <div className="champion-container" id="Morgana" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Morgana.png"
                                     alt="Morgana"/>
                            </div>
                            <div className="champion-container" id="Nami" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Nami.png"
                                     alt="Nami"/>
                            </div>
                            <div className="champion-container" id="Nasus" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Nasus.png"
                                     alt="Nasus"/>
                            </div>
                            <div className="champion-container" id="Nautilus" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Nautilus.png"
                                     alt="Nautilus"/>
                            </div>
                            <div className="champion-container" id="Neeko" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Neeko.png"
                                     alt="Neeko"/>
                            </div>
                            <div className="champion-container" id="Nidalee" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Nidalee.png"
                                     alt="Nidalee"/>
                            </div>
                            <div className="champion-container" id="Nocturne" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Nocturne.png"
                                     alt="Nocturne"/>
                            </div>
                            <div className="champion-container" id="Nunu" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Nunu.png"
                                     alt="Nunu"/>
                            </div>
                            <div className="champion-container" id="Olaf" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Olaf.png"
                                     alt="Olaf"/>
                            </div>
                            <div className="champion-container" id="Orianna" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Orianna.png"
                                     alt="Orianna"/>
                            </div>
                            <div className="champion-container" id="Ornn" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Ornn.png"
                                     alt="Ornn"/>
                            </div>
                            <div className="champion-container" id="Pantheon" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Pantheon.png"
                                     alt="Pantheon"/>
                            </div>
                            <div className="champion-container" id="Poppy" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Poppy.png"
                                     alt="Poppy"/>
                            </div>
                            <div className="champion-container" id="Pyke" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Pyke.png"
                                     alt="Pyke"/>
                            </div>
                            <div className="champion-container" id="Qiyana" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Qiyana.png"
                                     alt="Qiyana"/>
                            </div>
                            <div className="champion-container" id="Quinn" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Quinn.png"
                                     alt="Quinn"/>
                            </div>
                            <div className="champion-container" id="Rakan" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Rakan.png"
                                     alt="Rakan"/>
                            </div>
                            <div className="champion-container" id="Rammus" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Rammus.png"
                                     alt="Rammus"/>
                            </div>
                            <div className="champion-container" id="RekSai" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/RekSai.png"
                                     alt="RekSai"/>
                            </div>
                            <div className="champion-container" id="Rell" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Rell.png"
                                     alt="Rell"/>
                            </div>
                            <div className="champion-container" id="Renekton" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Renekton.png"
                                     alt="Renekton"/>
                            </div>
                            <div className="champion-container" id="Rengar" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Rengar.png"
                                     alt="Rengar"/>
                            </div>
                            <div className="champion-container" id="Riven" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Riven.png"
                                     alt="Riven"/>
                            </div>
                            <div className="champion-container" id="Rumble" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Rumble.png"
                                     alt="Rumble"/>
                            </div>
                            <div className="champion-container" id="Ryze" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Ryze.png"
                                     alt="Ryze"/>
                            </div>
                            <div className="champion-container" id="Samira" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Samira.png"
                                     alt="Samira"/>
                            </div>
                            <div className="champion-container" id="Sejuani" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Sejuani.png"
                                     alt="Sejuani"/>
                            </div>
                            <div className="champion-container" id="Senna" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Senna.png"
                                     alt="Senna"/>
                            </div>
                            <div className="champion-container" id="Seraphine" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Seraphine.png"
                                     alt="Seraphine"/>
                            </div>
                            <div className="champion-container" id="Sett" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Sett.png"
                                     alt="Sett"/>
                            </div>
                            <div className="champion-container" id="Shaco" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Shaco.png"
                                     alt="Shaco"/>
                            </div>
                            <div className="champion-container" id="Shen" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Shen.png"
                                     alt="Shen"/>
                            </div>
                            <div className="champion-container" id="Shyvana" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Shyvana.png"
                                     alt="Shyvana"/>
                            </div>
                            <div className="champion-container" id="Singed" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Singed.png"
                                     alt="Singed"/>
                            </div>
                            <div className="champion-container" id="Sion" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Sion.png"
                                     alt="Sion"/>
                            </div>
                            <div className="champion-container" id="Sivir" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Sivir.png"
                                     alt="Sivir"/>
                            </div>
                            <div className="champion-container" id="Skarner" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Skarner.png"
                                     alt="Skarner"/>
                            </div>
                            <div className="champion-container" id="Sona" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Sona.png"
                                     alt="Sona"/>
                            </div>
                            <div className="champion-container" id="Soraka" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Soraka.png"
                                     alt="Soraka"/>
                            </div>
                            <div className="champion-container" id="Swain" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Swain.png"
                                     alt="Swain"/>
                            </div>
                            <div className="champion-container" id="Sylas" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Sylas.png"
                                     alt="Sylas"/>
                            </div>
                            <div className="champion-container" id="Syndra" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Syndra.png"
                                     alt="Syndra"/>
                            </div>
                            <div className="champion-container" id="TahmKench" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/TahmKench.png"
                                     alt="TahmKench"/>
                            </div>
                            <div className="champion-container" id="Taliyah" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Taliyah.png"
                                     alt="Taliyah"/>
                            </div>
                            <div className="champion-container" id="Talon" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Talon.png"
                                     alt="Talon"/>
                            </div>
                            <div className="champion-container" id="Taric" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Taric.png"
                                     alt="Taric"/>
                            </div>
                            <div className="champion-container" id="Teemo" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Teemo.png"
                                     alt="Teemo"/>
                            </div>
                            <div className="champion-container" id="Thresh" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Thresh.png"
                                     alt="Thresh"/>
                            </div>
                            <div className="champion-container" id="Tristana" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Tristana.png"
                                     alt="Tristana"/>
                            </div>
                            <div className="champion-container" id="Soraka" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Soraka.png"
                                     alt="Soraka"/>
                            </div>
                            <div className="champion-container" id="Tryndamere" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Tryndamere.png"
                                     alt="Tryndamere"/>
                            </div>
                            <div className="champion-container" id="TwistedFate" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/TwistedFate.png"
                                     alt="TwistedFate"/>
                            </div>
                            <div className="champion-container" id="Twitch" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Twitch.png"
                                     alt="Twitch"/>
                            </div>
                            <div className="champion-container" id="Udyr" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Udyr.png"
                                     alt="Udyr"/>
                            </div>
                            <div className="champion-container" id="Urgot" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Urgot.png"
                                     alt="Urgot"/>
                            </div>
                            <div className="champion-container" id="Varus" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Varus.png"
                                     alt="Varus"/>
                            </div>
                            <div className="champion-container" id="Vayne" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Vayne.png"
                                     alt="Vayne"/>
                            </div>
                            <div className="champion-container" id="Velkoz" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Velkoz.png"
                                     alt="Velkoz"/>
                            </div>
                            <div className="champion-container" id="Vi" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Vi.png"
                                     alt="Vi"/>
                            </div>
                            <div className="champion-container" id="Viego" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Viego.png"
                                     alt="Viego"/>
                            </div>
                            <div className="champion-container" id="Viktor" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Viktor.png"
                                     alt="Viktor"/>
                            </div>
                            <div className="champion-container" id="Vladimir" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Vladimir.png"
                                     alt="Vladimir"/>
                            </div>
                            <div className="champion-container" id="Volibear" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Volibear.png"
                                     alt="Volibear"/>
                            </div>
                            <div className="champion-container" id="Vi" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Vi.png"
                                     alt="Vi"/>
                            </div>
                            <div className="champion-container" id="Warwick" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Warwick.png"
                                     alt="Warwick"/>
                            </div>
                            <div className="champion-container" id="MonkeyKing" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/MonkeyKing.png"
                                     alt="MonkeyKing"/>
                            </div>
                            <div className="champion-container" id="Xayah" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Xayah.png"
                                     alt="Xayah"/>
                            </div>
                            <div className="champion-container" id="XinZhao" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/XinZhao.png"
                                     alt="XinZhao"/>
                            </div>
                            <div className="champion-container" id="Yasuo" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Yasuo.png"
                                     alt="Yasuo"/>
                            </div>
                            <div className="champion-container" id="Yone" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Yone.png"
                                     alt="Yone"/>
                            </div>
                            <div className="champion-container" id="Yorick" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Yorick.png"
                                     alt="Yorick"/>
                            </div>
                            <div className="champion-container" id="Yuumi" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Yuumi.png"
                                     alt="Yuumi"/>
                            </div>
                            <div className="champion-container" id="Zac" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Zac.png"
                                     alt="Zac"/>
                            </div>
                            <div className="champion-container" id="Zed" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Zed.png"
                                     alt="Zed"/>
                            </div>
                            <div className="champion-container" id="Ziggs" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Ziggs.png"
                                     alt="Ziggs"/>
                            </div>
                            <div className="champion-container" id="Zilean" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Zilean.png"
                                     alt="Zilean"/>
                            </div>
                            <div className="champion-container" id="Zoe" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Zoe.png"
                                     alt="Zoe"/>
                            </div>
                            <div className="champion-container" id="Zyra" onClick={(e) => handleHover(e)}>
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Zyra.png"
                                     alt="Zyra"/>
                            </div>
                        </div>
                    </Col>
                    <Col sm={2}>
                        <div className="red-side">
                            <div className="pick-container" id="topRed" onClick={(e) => handleCurrentPick(e)}
                                 onContextMenu={e => handleRightClick(e)}>
                                <img
                                    src="http://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/-1.png"
                                    alt="none"/>
                                <p>&nbsp;{topRed}</p>
                            </div>
                            <div className="pick-container" id="jungleRed" onClick={(e) => handleCurrentPick(e)}
                                 onContextMenu={e => handleRightClick(e)}>
                                <img
                                    src="http://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/-1.png"
                                    alt="none"/>
                                <p>&nbsp;{jungleRed}</p>
                            </div>
                            <div className="pick-container" id="midRed" onClick={(e) => handleCurrentPick(e)}
                                 onContextMenu={e => handleRightClick(e)}>
                                <img
                                    src="http://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/-1.png"
                                    alt="none"/>
                                <p>&nbsp;{midRed}</p>
                            </div>
                            <div className="pick-container" id="botRed" onClick={(e) => handleCurrentPick(e)}
                                 onContextMenu={e => handleRightClick(e)}>
                                <img
                                    src="http://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/-1.png"
                                    alt="none"/>
                                <p>&nbsp;{botRed}</p>
                            </div>
                            <div className="pick-container" id="supportRed" onClick={(e) => handleCurrentPick(e)}
                                 onContextMenu={e => handleRightClick(e)}>
                                <img
                                    src="http://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/-1.png"
                                    alt="none"/>
                                <p>&nbsp;{supportRed}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};


// First param takes in the store and returns object of error: store.error
// Maps the store's error to the component's prop
export default withRouter(connect(() => ({}), {createPoll})(CreatePoll))
