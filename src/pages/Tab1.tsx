import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItemDivider, IonItem, IonLabel, IonSelect, IonSelectOption, IonCard, IonButton, IonGrid, IonCol, IonRow } from '@ionic/react';
import './Tab1.css';
import { setInterval } from 'timers';
const Tab1: React.FC = () => {
  const [showValue, setShowValue] = useState('');
  const [totalTime, setTotalTime] = useState(0);
  const [disabledStart, setDisabledStart] = useState(false);
  const [disabledStop, setDisabledStop] = useState(true);
  const [disabledPause, setDisabledPause] = useState(true);
  const [disabledForm, setDisabledForm] = useState(false);
  const [intervalStore, setIntervalStore] = useState({});
  //Inputs
  const [minutesInput, setminutesInput] = useState(0);
  const [secondsInput, setSecondsInput] = useState(0);
  const [restInput, setRestInput] = useState(0);
  const [roundsInput, setRoundsInput] = useState(0);
  const setMinutesValue = (event: any) => {
    event.preventDefault();
    setminutesInput(parseInt(event.target.value));
  }
  const setSecondsValue = (event: any) => {
    event.preventDefault();
    setSecondsInput(parseInt(event.target.value));
  }
  const setRestValue = (event: any) => {
    event.preventDefault();
    setRestInput(parseInt(event.target.value));
  }
  const setRoundsValue = (event: any) => {
    event.preventDefault();
    setRoundsInput(parseInt(event.target.value));
  }

  useEffect(() => { //Para actualizar el showvalue
    if (secondsInput >= 10) {
      setShowValue(`0${minutesInput}:${secondsInput}`);
    } else {
      setShowValue(`0${minutesInput}:0${secondsInput}`);
    }
    setTotalTime((minutesInput * 60) + secondsInput);
  }, [minutesInput, secondsInput]);
  useEffect(() => { //Para actualizar el showvalue
    if (totalTime <= 0) {
      console.log(0);
      setShowValue('00:00');
      if ('_id' in intervalStore) {
        window.clearInterval(intervalStore['_id']);
      }
    }
    else if (totalTime / 60 >= 1) {
      // setShowValue(`0${Math.floor(totalTime / 60)}:${totalTime - (Math.floor(totalTime / 60) * 60) < 10 ? 0 + totalTime - (Math.floor(totalTime / 60) * 60) : totalTime - (Math.floor(totalTime / 60) * 60)}`)
      setShowValue('0' + Math.floor(totalTime / 60) + ':' + (totalTime - (Math.floor(totalTime / 60) * 60) < 10 ? '0' + (totalTime - (Math.floor(totalTime / 60) * 60)) : totalTime - (Math.floor(totalTime / 60) * 60)))
    } else {
      setShowValue('00:' + (totalTime < 10 ? '0' + totalTime : totalTime));
    }
  }, [totalTime]);
  const startFn = (event: any) => {
    event.preventDefault();
    let timeVar = totalTime;
    setIntervalStore(setInterval(() => {
      timeVar--
      setTotalTime(timeVar);
    }, 1000));
    setDisabledForm(true);
    setDisabledPause(false);
    setDisabledStart(true);
    setDisabledStop(false);
  }
  const pauseFn = (event: any) => {
    event.preventDefault();
    if ('_id' in intervalStore) {
      window.clearInterval(intervalStore['_id']);
      setIntervalStore({});
      setDisabledPause(true);
      setDisabledStart(false);
    }
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Boxing Timer</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Boxing Timer</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h1 className="ion-text-center ion-margin-bottom">{showValue}</h1>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton disabled={disabledPause} expand="block" color="warning" onClick={e => pauseFn(e)}>Pause</IonButton>
            </IonCol>
            <IonCol>
              <IonButton disabled={disabledStop} expand="block" color="danger">Stop</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton disabled={disabledStart} expand="block" color="primary" onClick={e => startFn(e)}>Start</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonItemDivider />
        <IonCard>
          <IonItem>
            <IonLabel>Minutes</IonLabel>
            <IonSelect disabled={disabledForm} value={minutesInput} okText="Ok" cancelText="Cancel" onIonChange={e => setMinutesValue(e)}>
              <IonSelectOption value="0">0</IonSelectOption>
              <IonSelectOption value="1">1</IonSelectOption>
              <IonSelectOption value="2">2</IonSelectOption>
              <IonSelectOption value="3">3</IonSelectOption>
              <IonSelectOption value="4">4</IonSelectOption>
              <IonSelectOption value="5">5</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel>Seconds</IonLabel>
            <IonSelect disabled={disabledForm} value={secondsInput} okText="Ok" cancelText="Cancel" onIonChange={e => setSecondsValue(e)}>
              <IonSelectOption value="0">0</IonSelectOption>
              <IonSelectOption value="10">10</IonSelectOption>
              <IonSelectOption value="20">20</IonSelectOption>
              <IonSelectOption value="30">30</IonSelectOption>
              <IonSelectOption value="40">40</IonSelectOption>
              <IonSelectOption value="50">50</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel>Rest</IonLabel>
            <IonSelect disabled={disabledForm} value={restInput} okText="Ok" cancelText="Cancel" onIonChange={e => setRestValue(e)}>
              <IonSelectOption value="10">10</IonSelectOption>
              <IonSelectOption value="20">20</IonSelectOption>
              <IonSelectOption value="30">30</IonSelectOption>
              <IonSelectOption value="40">40</IonSelectOption>
              <IonSelectOption value="50">50</IonSelectOption>
              <IonSelectOption value="60">60</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel>Rounds</IonLabel>
            <IonSelect disabled={disabledForm} value={roundsInput} okText="Ok" cancelText="Cancel" onIonChange={e => setRoundsValue(e)}>
              <IonSelectOption value="0">0</IonSelectOption>
              <IonSelectOption value="1">1</IonSelectOption>
              <IonSelectOption value="2">2</IonSelectOption>
              <IonSelectOption value="3">3</IonSelectOption>
              <IonSelectOption value="4">4</IonSelectOption>
              <IonSelectOption value="5">5</IonSelectOption>
              <IonSelectOption value="6">6</IonSelectOption>
              <IonSelectOption value="7">7</IonSelectOption>
              <IonSelectOption value="8">8</IonSelectOption>
              <IonSelectOption value="9">9</IonSelectOption>
              <IonSelectOption value="10">10</IonSelectOption>
              <IonSelectOption value="11">11</IonSelectOption>
              <IonSelectOption value="12">12</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage >
  );
};

export default Tab1;
