import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './style.scss'
import React from 'react'

export default function BlogProductCarousel() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className="BlogProductCarousel">
            <h2>Популярные экскурсии</h2>
            <Carousel responsive={responsive}>
                <div className="card-1">
                    <span className="name-1">Автобусный тур</span>
                    <h4 className="name--2">Обзорная по Сочи (из Адлера)</h4>
                    <small className="time-1">6 часов</small> <small className="price-1">618$</small>
                    <p className="info-1">Приглашаем вас на экскурсию
                        "Обзорная по Большому Сочи":
                        Экскурсия начнется с подъёма на гору Большой Ахун - это  высшая точка (665 метров) на побережьи Сочи. На вершине горы Большой Ахун есть смотровая башня, построенная в 1935-36 годах по проекту архитектора С. И. Воробьева...</p>
                    <button className="btn">More</button>

                </div>
                <div className="card-2">
                    <span className="name-2">Автобусный тур</span>
                    <h4 className="name--3">Обзорная по Сочи (из Адлера)</h4>
                    <small className="time-2">6 часов</small> <small className="price-2">618$</small>
                    <p className="info-2">Приглашаем вас на экскурсию
                        "Обзорная по Большому Сочи":
                        Экскурсия начнется с подъёма на гору Большой Ахун - это  высшая точка (665 метров) на побережьи Сочи. На вершине горы Большой Ахун есть смотровая башня, построенная в 1935-36 годах по проекту архитектора С. И. Воробьева...</p>
                        <button className="btn">More</button>
                </div>
                <div className="card-3">
                    <span className="name-3">Автобусный тур</span>
                    <h4 className="name--4">Обзорная по Сочи (из Адлера)</h4>
                    <small className="time-3">6 часов</small> <small className="price-3">618$</small>
                    <p className="info-3">Приглашаем вас на экскурсию
                        "Обзорная по Большому Сочи":
                        Экскурсия начнется с подъёма на гору Большой Ахун - это  высшая точка (665 метров) на побережьи Сочи. На вершине горы Большой Ахун есть смотровая башня, построенная в 1935-36 годах по проекту архитектора С. И. Воробьева...</p>
                        <button className="btn">More</button>
                </div>
                <div className="card-4">
                    <span className="name-4">Автобусный тур</span>
                    <h4 className="name--5">Обзорная по Сочи (из Адлера)</h4>
                    <small className="time-4">6 часов</small> <small className="price-4">618$</small>
                    <p className="info-4">Приглашаем вас на экскурсию
                        "Обзорная по Большому Сочи":
                        Экскурсия начнется с подъёма на гору Большой Ахун - это  высшая точка (665 метров) на побережьи Сочи. На вершине горы Большой Ахун есть смотровая башня, построенная в 1935-36 годах по проекту архитектора С. И. Воробьева...</p>
                        <button className="btn">More</button>
                
                </div>
            </Carousel>
        </div>
    )
}
