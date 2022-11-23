import React from "react";
import DesktopOne from "pages/DesktopOne";
import SignUpOne from "pages/SignUpOne";
import ServiceRequestSelectedFour from "pages/ServiceRequestSelectedFour";
import EditSelectedDroneDetails from "pages/EditSelectedDroneDetails";
import EditSelectedDroneDetailsTwo from "pages/EditSelectedDroneDetailsTwo";
import EditSelectedDroneDetailsOne from "pages/EditSelectedDroneDetailsOne";
import ServiceRequestSelectedTwo from "pages/ServiceRequestSelectedTwo";
import ServiceRequestSelectedThree from "pages/ServiceRequestSelectedThree";
import SystemAdminPilotMana from "pages/SystemAdminPilotMana";
import SystemAdminPilotManaOne from "pages/SystemAdminPilotManaOne";
import DroneAIModelEvaluations from "pages/DroneAIModelEvaluations";
import DroneAIAIModelManagement from "pages/DroneAIAIModelManagement";
import DroneAIAIServices from "pages/DroneAIAIServices";
import DroneDataDataAnalysis from "pages/DroneDataDataAnalysis";
import DroneDataDataProcessing from "pages/DroneDataDataProcessing";
import DroneData from "pages/DroneData";
import DroneDataLivestock from "pages/DroneDataLivestock";
import DroneDataLivestockDa from "pages/DroneDataLivestockDa";
import ServiceHistory from "pages/ServiceHistory";
import CloudAdminSearchSche from "pages/CloudAdminSearchSche";
import CloudAdminSearchScheThree from "pages/CloudAdminSearchScheThree";
import EditDrone from "pages/EditDrone";
import AddDrone from "pages/AddDrone";
import DroneManagement from "pages/DroneManagement";
import CloudAdminSearchScheTwo from "pages/CloudAdminSearchScheTwo";
import CloudAdminSearchScheOne from "pages/CloudAdminSearchScheOne";
import DroneCatalogMissionP from "pages/DroneCatalogMissionP";
import DroneCatalogBookingS from "pages/DroneCatalogBookingS";
import DroneCatalogMissionPOne from "pages/DroneCatalogMissionPOne";
import INITIALVERSIONDroneB from "pages/INITIALVERSIONDroneB";
import CloudAdminSearchStar from "pages/CloudAdminSearchStar";
import DRAFTCloudAdminBoo from "pages/DRAFTCloudAdminBoo";
import DroneTrackingMapSurv from "pages/DroneTrackingMapSurv";
import DroneARVRTracking from "pages/DroneARVRTracking";
import StatisticsTime from "pages/StatisticsTime";
import DroneTrackingMapData from "pages/DroneTrackingMapData";
import AdminDashboardDroneT from "pages/AdminDashboardDroneT";
import StatisticsDistance from "pages/StatisticsDistance";
import StatisticsPerServiceType from "pages/StatisticsPerServiceType";
import DroneFleetStatistics from "pages/DroneFleetStatistics";
import AdminSimulatedCloudD from "pages/AdminSimulatedCloudD";
import AdminCloudDashboardMap from "pages/AdminCloudDashboardMap";
import AdminCloudDashboardHome from "pages/AdminCloudDashboardHome";
import PilotScheduleTimesPerDay from "pages/PilotScheduleTimesPerDay";
import PilotSchedule from "pages/PilotSchedule";
import PilotDashboard from "pages/PilotDashboard";
import DroneSimulationDetails from "pages/DroneSimulationDetails";
import CreateaSimulatedDrone from "pages/CreateaSimulatedDrone";
import DRAFTDroneSimulation from "pages/DRAFTDroneSimulation";
import MaintenanceProcessFlow from "pages/MaintenanceProcessFlow";
import MaintenanceBilling from "pages/MaintenanceBilling";
import FarmerMaintenanceReques from "pages/FarmerMaintenanceReques";
import FarmerMaintenanceRequest from "pages/FarmerMaintenanceRequest";
import FarmerDashboardMaintenance from "pages/FarmerDashboardMaintenance";
import FarmerServiceReportDetails from "pages/FarmerServiceReportDetails";
import FarmerServiceReports from "pages/FarmerServiceReports";
import ServiceRequestDroneCatThree from "pages/ServiceRequestDroneCatThree";
import BillingSurveillance from "pages/BillingSurveillance";
import FinishedBookingSurvei from "pages/FinishedBookingSurvei";
import ServiceRequestEstimated from "pages/ServiceRequestEstimated";
import ServiceRequestSelected from "pages/ServiceRequestSelected";
import ServiceRequestDroneCatOne from "pages/ServiceRequestDroneCatOne";
import ServiceRequestDroneCat from "pages/ServiceRequestDroneCat";
import BillingDataCollection from "pages/BillingDataCollection";
import FarmerBookingServicePr from "pages/FarmerBookingServicePr";
import FinishedBookingDataC from "pages/FinishedBookingDataC";
import ServiceRequestEstimatedOne from "pages/ServiceRequestEstimatedOne";
import ServiceRequestSelectedOne from "pages/ServiceRequestSelectedOne";
import ServiceRequestDroneCatFour from "pages/ServiceRequestDroneCatFour";
import ServiceRequestSelectFa from "pages/ServiceRequestSelectFa";
import FarmerDASHBOARD from "pages/FarmerDASHBOARD";
import ServiceRequestDroneCatTwo from "pages/ServiceRequestDroneCatTwo";
import FarmVerificationProfileThree from "pages/FarmVerificationProfileThree";
import FarmVerificationProfileTwo from "pages/FarmVerificationProfileTwo";
import FarmVerificationProfileOne from "pages/FarmVerificationProfileOne";
import FarmlandProfile from "pages/FarmlandProfile";
import FarmProfile from "pages/FarmProfile";
import FarmerProfile from "pages/FarmerProfile";
import PilotRegisterFour from "pages/PilotRegisterFour";
import PilotRegisterThree from "pages/PilotRegisterThree";
import PilotRegisterFive from "pages/PilotRegisterFive";
import PilotRegisterTwo from "pages/PilotRegisterTwo";
import PilotRegisterOne from "pages/PilotRegisterOne";
import FarmerRegisterSix from "pages/FarmerRegisterSix";
import FarmerRegisterFive from "pages/FarmerRegisterFive";
import FarmerRegisterSeven from "pages/FarmerRegisterSeven";
import FarmerRegisterEight from "pages/FarmerRegisterEight";
import FarmerRegisterFour from "pages/FarmerRegisterFour";
import MapRegisterPlotvTwo from "pages/MapRegisterPlotvTwo";
import FarmerRegisterThree from "pages/FarmerRegisterThree";
import MapRegisterFarm from "pages/MapRegisterFarm";
import FarmerRegisterTwo from "pages/FarmerRegisterTwo";
import FarmerRegisterOne from "pages/FarmerRegisterOne";
import RegisterOne from "pages/RegisterOne";
import LogIn from "pages/LogIn";
import SignUp from "pages/SignUp";
import ServiceRequestDroneCatFive from "pages/ServiceRequestDroneCatFive";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ServiceRequestDroneCatFive />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/registerone" element={<RegisterOne />} />
        <Route path="/farmerregisterone" element={<FarmerRegisterOne />} />
        <Route path="/farmerregistertwo" element={<FarmerRegisterTwo />} />
        <Route path="/mapregisterfarm" element={<MapRegisterFarm />} />
        <Route path="/farmerregisterthree" element={<FarmerRegisterThree />} />
        <Route path="/mapregisterplotvtwo" element={<MapRegisterPlotvTwo />} />
        <Route path="/farmerregisterfour" element={<FarmerRegisterFour />} />
        <Route path="/farmerregistereight" element={<FarmerRegisterEight />} />
        <Route path="/farmerregisterseven" element={<FarmerRegisterSeven />} />
        <Route path="/farmerregisterfive" element={<FarmerRegisterFive />} />
        <Route path="/farmerregistersix" element={<FarmerRegisterSix />} />
        <Route path="/pilotregisterone" element={<PilotRegisterOne />} />
        <Route path="/pilotregistertwo" element={<PilotRegisterTwo />} />
        <Route path="/pilotregisterfive" element={<PilotRegisterFive />} />
        <Route path="/pilotregisterthree" element={<PilotRegisterThree />} />
        <Route path="/pilotregisterfour" element={<PilotRegisterFour />} />
        <Route path="/farmerprofile" element={<FarmerProfile />} />
        <Route path="/farmprofile" element={<FarmProfile />} />
        <Route path="/farmlandprofile" element={<FarmlandProfile />} />
        <Route
          path="/farmverificationprofileone"
          element={<FarmVerificationProfileOne />}
        />
        <Route
          path="/farmverificationprofiletwo"
          element={<FarmVerificationProfileTwo />}
        />
        <Route
          path="/farmverificationprofilethree"
          element={<FarmVerificationProfileThree />}
        />
        <Route
          path="/servicerequestdronecattwo"
          element={<ServiceRequestDroneCatTwo />}
        />
        <Route path="/farmerdashboard" element={<FarmerDASHBOARD />} />
        <Route
          path="/servicerequestselectfa"
          element={<ServiceRequestSelectFa />}
        />
        <Route
          path="/servicerequestdronecatfour"
          element={<ServiceRequestDroneCatFour />}
        />
        <Route
          path="/servicerequestselectedone"
          element={<ServiceRequestSelectedOne />}
        />
        <Route
          path="/servicerequestestimatedone"
          element={<ServiceRequestEstimatedOne />}
        />
        <Route
          path="/finishedbookingdatac"
          element={<FinishedBookingDataC />}
        />
        <Route
          path="/farmerbookingservicepr"
          element={<FarmerBookingServicePr />}
        />
        <Route
          path="/billingdatacollection"
          element={<BillingDataCollection />}
        />
        <Route
          path="/servicerequestdronecat"
          element={<ServiceRequestDroneCat />}
        />
        <Route
          path="/servicerequestdronecatone"
          element={<ServiceRequestDroneCatOne />}
        />
        <Route
          path="/servicerequestselected"
          element={<ServiceRequestSelected />}
        />
        <Route
          path="/servicerequestestimated"
          element={<ServiceRequestEstimated />}
        />
        <Route
          path="/finishedbookingsurvei"
          element={<FinishedBookingSurvei />}
        />
        <Route path="/billingsurveillance" element={<BillingSurveillance />} />
        <Route
          path="/servicerequestdronecatthree"
          element={<ServiceRequestDroneCatThree />}
        />
        <Route
          path="/farmerservicereports"
          element={<FarmerServiceReports />}
        />
        <Route
          path="/farmerservicereportdetails"
          element={<FarmerServiceReportDetails />}
        />
        <Route
          path="/farmerdashboardmaintenance"
          element={<FarmerDashboardMaintenance />}
        />
        <Route
          path="/farmermaintenancerequest"
          element={<FarmerMaintenanceRequest />}
        />
        <Route
          path="/farmermaintenancereques"
          element={<FarmerMaintenanceReques />}
        />
        <Route path="/maintenancebilling" element={<MaintenanceBilling />} />
        <Route
          path="/maintenanceprocessflow"
          element={<MaintenanceProcessFlow />}
        />
        <Route
          path="/draftdronesimulation"
          element={<DRAFTDroneSimulation />}
        />
        <Route
          path="/createasimulateddrone"
          element={<CreateaSimulatedDrone />}
        />
        <Route
          path="/dronesimulationdetails"
          element={<DroneSimulationDetails />}
        />
        <Route path="/pilotdashboard" element={<PilotDashboard />} />
        <Route path="/pilotschedule" element={<PilotSchedule />} />
        <Route
          path="/pilotscheduletimesperday"
          element={<PilotScheduleTimesPerDay />}
        />
        <Route
          path="/adminclouddashboardhome"
          element={<AdminCloudDashboardHome />}
        />
        <Route
          path="/adminclouddashboardmap"
          element={<AdminCloudDashboardMap />}
        />
        <Route
          path="/adminsimulatedcloudd"
          element={<AdminSimulatedCloudD />}
        />
        <Route
          path="/dronefleetstatistics"
          element={<DroneFleetStatistics />}
        />
        <Route
          path="/statisticsperservicetype"
          element={<StatisticsPerServiceType />}
        />
        <Route path="/statisticsdistance" element={<StatisticsDistance />} />
        <Route
          path="/admindashboarddronet"
          element={<AdminDashboardDroneT />}
        />
        <Route
          path="/dronetrackingmapdata"
          element={<DroneTrackingMapData />}
        />
        <Route path="/statisticstime" element={<StatisticsTime />} />
        <Route path="/dronearvrtracking" element={<DroneARVRTracking />} />
        <Route
          path="/dronetrackingmapsurv"
          element={<DroneTrackingMapSurv />}
        />
        <Route path="/draftcloudadminboo" element={<DRAFTCloudAdminBoo />} />
        <Route
          path="/cloudadminsearchstar"
          element={<CloudAdminSearchStar />}
        />
        <Route
          path="/initialversiondroneb"
          element={<INITIALVERSIONDroneB />}
        />
        <Route
          path="/dronecatalogmissionpone"
          element={<DroneCatalogMissionPOne />}
        />
        <Route
          path="/dronecatalogbookings"
          element={<DroneCatalogBookingS />}
        />
        <Route
          path="/dronecatalogmissionp"
          element={<DroneCatalogMissionP />}
        />
        <Route
          path="/cloudadminsearchscheone"
          element={<CloudAdminSearchScheOne />}
        />
        <Route
          path="/cloudadminsearchschetwo"
          element={<CloudAdminSearchScheTwo />}
        />
        <Route path="/dronemanagement" element={<DroneManagement />} />
        <Route path="/adddrone" element={<AddDrone />} />
        <Route path="/editdrone" element={<EditDrone />} />
        <Route
          path="/cloudadminsearchschethree"
          element={<CloudAdminSearchScheThree />}
        />
        <Route
          path="/cloudadminsearchsche"
          element={<CloudAdminSearchSche />}
        />
        <Route path="/servicehistory" element={<ServiceHistory />} />
        <Route
          path="/dronedatalivestockda"
          element={<DroneDataLivestockDa />}
        />
        <Route path="/dronedatalivestock" element={<DroneDataLivestock />} />
        <Route path="/dronedata" element={<DroneData />} />
        <Route
          path="/dronedatadataprocessing"
          element={<DroneDataDataProcessing />}
        />
        <Route
          path="/dronedatadataanalysis"
          element={<DroneDataDataAnalysis />}
        />
        <Route path="/droneaiaiservices" element={<DroneAIAIServices />} />
        <Route
          path="/droneaiaimodelmanagement"
          element={<DroneAIAIModelManagement />}
        />
        <Route
          path="/droneaimodelevaluations"
          element={<DroneAIModelEvaluations />}
        />
        <Route
          path="/systemadminpilotmanaone"
          element={<SystemAdminPilotManaOne />}
        />
        <Route
          path="/systemadminpilotmana"
          element={<SystemAdminPilotMana />}
        />
        <Route
          path="/servicerequestselectedthree"
          element={<ServiceRequestSelectedThree />}
        />
        <Route
          path="/servicerequestselectedtwo"
          element={<ServiceRequestSelectedTwo />}
        />
        <Route
          path="/editselecteddronedetailsone"
          element={<EditSelectedDroneDetailsOne />}
        />
        <Route
          path="/editselecteddronedetailstwo"
          element={<EditSelectedDroneDetailsTwo />}
        />
        <Route
          path="/editselecteddronedetails"
          element={<EditSelectedDroneDetails />}
        />
        <Route
          path="/servicerequestselectedfour"
          element={<ServiceRequestSelectedFour />}
        />
        <Route path="/signupone" element={<SignUpOne />} />
        <Route path="/desktopone" element={<DesktopOne />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
