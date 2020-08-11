import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItemDivider, IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/react';
import './Tab1.css';
const Tab1: React.FC = () => {
  const [showValue, setShowValue] = useState('');
  const [totalTime, setTotalTime] = useState(0);
  useEffect(() => {
    setShowValue(`${minutesInput}:${secondsInput}`);
  });
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
        <IonItemDivider />
        <IonItem>
          <IonLabel>Minutes</IonLabel>
          <IonSelect value={minutesInput} okText="Ok" cancelText="Cancel" onIonChange={e => setMinutesValue(e)}>
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
          <IonSelect value={secondsInput} okText="Ok" cancelText="Cancel" onIonChange={e => setSecondsValue(e)}>
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
          <IonSelect value={restInput} okText="Ok" cancelText="Cancel" onIonChange={e => setRestValue(e)}>
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
          <IonSelect value={roundsInput} okText="Ok" cancelText="Cancel" onIonChange={e => setRoundsValue(e)}>
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
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
