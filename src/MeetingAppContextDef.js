import { makeStyles } from "@material-ui/core";
import { SnackbarProvider } from "notistack";
import { useContext, createContext, useState, useEffect, useRef } from "react";
import { validURL } from "./utils/common";
import React from "react";
import db from "./firebase";


// function MeetingAppContextDef() {
//   const [id, setId] = useState("");
//   const [memberName, setMemberName] = useState("");
//   const [memberType, setMemberType] = useState("");
//   const [meetingId, setMeetingId] = useState("");
//   const [meetingURL, setMeetingURL] = useState("");
//   const [meetingStatus, setMeetingStatus] = useState("");
//   const [meetingStartTime, setMeetingEndTime] = useState("");

  
// }

export const MeetingAppContext = createContext();


export const useMeetingAppContext = () => useContext(MeetingAppContext);


export const sideBarModes = {
  PARTICIPANTS: "PARTICIPANTS",
  CHAT: "CHAT",
  ACTIVITIES: "ACTIVITIES",
};

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
}));

export const meetingLayouts = {
  SPOTLIGHT: "SPOTLIGHT",
  SIDEBAR: "SIDEBAR",
  GRID: "GRID",
};

export const MeetingAppProvider = ({
  children,
  redirectOnLeave,
  chatEnabled,
  screenShareEnabled,
  pollEnabled,
  whiteBoardEnabled,
  participantCanToggleSelfWebcam,
  participantCanToggleSelfMic,
  participantCanToggleSelfScreenShare,
  raiseHandEnabled,
  recordingEnabled,
  recordingWebhookUrl,
  recordingEnabledByDefault,
  participantCanToggleRecording,
  brandingEnabled,
  brandLogoURL,
  brandName,
  participantCanLeave,
  poweredBy,
  liveStreamEnabled,
  autoStartLiveStream,
  liveStreamOutputs,
  askJoin,
  participantCanToggleOtherMic,
  participantCanToggleOtherWebcam,
  notificationSoundEnabled,
  layout,
  canPin,
  memberName,
  memberType,
  memberStatus,
  meetingId,
  meetingURL,
  meetingStartTime,
  meetingEndTime
}) => {
  const containerRef = useRef();
  const endCallContainerRef = useRef();

  const classes = useStyles();
  const [sideBarMode, setSideBarMode] = useState(null);
  const [activeSortedParticipants, setActiveSortedParticipants] = useState([]);
  const [mainViewParticipants, setMainViewParticipants] = useState([]);
  const [overlaidInfoVisible, setOverlaidInfoVisible] = useState(true);
  const [raisedHandsParticipants, setRaisedHandsParticipants] = useState([]);
  const [userHasInteracted, setUserHasInteracted] = useState(true);
  //const [userDocId, setUserDocId] = useState(null);
  // const [meetingLayout, setMeetingLayout] = useState(meetingLayouts[layout]);
  // const [pinnedParticipants, setPinnedParticipants] = useState(new Map());

  // const handleWindowClose = () => {
  //   // event on user closes the tab
  //   alert("Closing....");
  // };

  // useEffect(() => {
  //   alert("Closing....");
  //   window.addEventListener("onbeforeunload", handleWindowClose);

  //   return () => {
  //     window.removeEventListener("onbeforeunload", handleWindowClose);
  //   };
  // }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const _handleUnload = () => {
    // call api here
    //alert("Closing....");
    db.collection("meetingDetails").doc("Participant-" + meetingId.toString()).update({memberStatus: "Meeting End", meetingEndTime: Date().toLocaleString()});
  };

  useEffect(() => {
    window.addEventListener("unload", _handleUnload);

    return () => {
      window.removeEventListener("unload", _handleUnload);
    };
  }, [_handleUnload]);

  window.onbeforeunload = function(e) {
    //alert("Closing...");
  }

  useEffect(() => {
    if (!validURL(redirectOnLeave)) {
      throw new Error("Redirect url not valid");
    }
  }, [redirectOnLeave]);

  useEffect(() => {
    // call api 
    //alert("Participant Entered !! " + memberName);
    // let messageRef = fire.database().ref('message').orderByKey().limitToLast(100);
    // fire.database.ref('message').push(participantName);

    // db.collection("meetingDetails").add({
    //   id: "5234567",
    //   memberName: memberName,
    //   memberType: memberType,
    //   memberStatus: memberStatus,
    //   meetingId: meetingId,
    //   meetingURL: meetingURL,
    //   meetingStartTime: meetingStartTime,
    //   meetingEndTime: meetingEndTime
    //   });
    var docId = new Date().getTime();
    //setUserDocId(docId);
    // db.collection("meetingDetails").doc(meetingId.toString().replace('-','') + "-" + docId).set({
      if(memberType === "Host") {
        memberStatus  = "Host Joined";
      }
      db.collection("meetingDetails").doc(memberType + "-" + meetingId.toString()).set({
      id: docId,
      memberName: memberName,
      memberType: memberType,
      memberStatus: memberStatus,
      meetingId: meetingId,
      meetingURL: meetingURL,
      meetingStartTime: meetingStartTime,
      meetingEndTime: meetingEndTime
      });

  },[meetingEndTime, meetingId, meetingStartTime, meetingURL, memberName, memberStatus, memberType])

  return (
    <MeetingAppContext.Provider
      value={{
        // refs
        containerRef,
        endCallContainerRef,
        // params
        redirectOnLeave,
        chatEnabled,
        screenShareEnabled,
        pollEnabled,
        whiteBoardEnabled,
        participantCanToggleSelfWebcam,
        participantCanToggleSelfMic,
        participantCanToggleSelfScreenShare,
        raiseHandEnabled,
        recordingEnabled,
        recordingWebhookUrl,
        recordingEnabledByDefault,
        participantCanToggleRecording,
        brandingEnabled,
        brandLogoURL,
        brandName,
        participantCanLeave,
        poweredBy,
        liveStreamEnabled,
        autoStartLiveStream,
        liveStreamOutputs,
        askJoin,
        participantCanToggleOtherMic,
        participantCanToggleOtherWebcam,
        notificationSoundEnabled,
        // states
        sideBarMode,
        activeSortedParticipants,
        mainViewParticipants,
        overlaidInfoVisible,
        raisedHandsParticipants,
        userHasInteracted,
        // pinnedParticipants,
        meetingLayout: layout,
        canPin,
        // setters
        setSideBarMode,
        setActiveSortedParticipants,
        setMainViewParticipants,
        setOverlaidInfoVisible,
        setRaisedHandsParticipants,
        setUserHasInteracted,
        // setPinnedParticipants,
        // setMeetingLayout,
        //userDocId,
      }}
    >
      <SnackbarProvider
        className={classes.container}
        autoHideDuration={5000}
        maxSnack={3}
      >
        {children}
      </SnackbarProvider>
    </MeetingAppContext.Provider>
  );
};
