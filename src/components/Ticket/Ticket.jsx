import React, { Component } from 'react'

import AppController from '../../services/AppController'

import classes from './Ticket.module.scss'
class Ticket extends Component {
  constructor(props) {
    super(props)
    this.appController = new AppController(classes)
  }
  getDurationHours(duration) {
    return Math.floor(duration / 60)
  }
  getDurationMinutes(duration) {
    return duration % 60
  }
  withLeftZero(number) {
    return number > 9 ? String(number) : '0' + number
  }
  getArrivalTime(departure_date, duration) {
    let [hours, mins] = this.getHoursAndMins(departure_date)
    let [ex_hours, ex_mins] = [this.getDurationHours(duration), this.getDurationMinutes(duration)]
    let sumMins = mins + ex_mins
    let sumHours = hours + ex_hours
    return `${this.withLeftZero((sumHours + Math.floor(sumMins / 60)) % 24)}:${this.withLeftZero(sumMins % 60)}`
  }
  getHoursAndMins(date) {
    return [date.getHours(), date.getMinutes()]
  }
  getDurationTime(durationInMins) {
    return `${Math.floor(durationInMins / 60)}ч ${Math.floor(durationInMins % 60)}м`
  }
  getStopsStr(numOfStops) {
    if (numOfStops === 0) return '0 пересадок'
    if (numOfStops === 1) return '1 пересадка'
    if (numOfStops > 1 && numOfStops < 5) return numOfStops + ' пересадки'
    if (numOfStops >= 5) return numOfStops + ' пересадок'
  }
  render() {
    const f = this.appController.classesToCssModulesFormat.bind(this.appController)
    let { origin: origin_there, destination: destination_there, date: date_there, stops: stops_there, duration: duration_there } = this.props.ticket.segments[0]
    // { origin: 'MOW', destination: 'HKT', date: '2022-10-08T06:32:30.353Z', stops: ['HKG', 'JNB'], duration: 614 }
    let { origin: origin_back, destination: destination_back, date: date_back, stops: stops_back, duration: duration_back } = this.props.ticket.segments[1]
    // { origin: 'HKT', destination: 'MOW', date: '2023-04-21T02:42:31.235Z', duration: 1168, stops: ['IST', 'JNB', 'HKG'] }
    date_there = new Date(date_there)
    date_back = new Date(date_back)
    let [hours_there, mins_there] = this.getHoursAndMins(date_there)
    let [hours_back, mins_back] = this.getHoursAndMins(date_back)
    return (
      <div className={f('ticket')}>
        <div className={f('ticket__header')}>
          <div className={f('ticket__price')}>{`${this.props.ticket.price} Р `}</div>
          <img src={`https://pics.avs.io/99/36/${this.props.ticket.carrier}.png`} alt="" />
        </div>
        <div className={f('info ticket__info')}>
          <div className={f('info__item from-to')}>
            <div className={f('info__header')}>{`${origin_there}-${destination_there}`}</div>
            <div className={f('info__value')}>{`${this.withLeftZero(hours_there)}:${this.withLeftZero(mins_there)}-${this.getArrivalTime(date_there, duration_there)}`}</div>
            <div className={f('info__header')}>{`${origin_back}-${destination_back}`}</div>
            <div className={f('info__value')}>{`${this.withLeftZero(hours_back)}:${this.withLeftZero(mins_back)}-${this.getArrivalTime(date_back, duration_back)}`}</div>
          </div>
          <div className={f('info__item duration')}>
            <div className={f('info__header')}>в пути</div>
            <div className={f('info__value')}>{this.getDurationTime(duration_there)}</div>
            <div className={f('info__header')}>в пути</div>
            <div className={f('info__value')}>{this.getDurationTime(duration_back)}</div>
          </div>
          <div className={f('info__item stops')}>
            <div className={f('info__header')}>{this.getStopsStr(stops_there.length)}</div>
            <div className={f('info__value')}>{stops_there.join(', ')}</div>
            <div className={f('info__header')}>{this.getStopsStr(stops_back.length)}</div>
            <div className={f('info__value')}>{stops_back.join(', ')}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Ticket
