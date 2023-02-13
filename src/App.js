import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from './Components/HomeComponent';
import SayHelloComponent from './Components/SayHelloComponent';
import AddTwoNumbersComponent from './Components/AddTwoNumbersComponent';
import AskingQuestionsComponent from './Components/AskingQuestionsComponent';
import OddOrEvenComponent from './Components/OddOrEvenComponent';
import GreaterThanOrLessThanComponent from './Components/GreaterThanOrLessThanComponent';
import MadlibComponent from './Components/MadlibComponent';
import ReverseItComponent from './Components/ReverseItComponent';
import StudentDirectoryComponent from './Components/StudentDirectoryComponent';
import RestaurantPickerComponent from './Components/RestaurantPickerComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={HomeComponent()}></Route>
          <Route path='SayHello' element={SayHelloComponent()}></Route>
          <Route path='AddTwoNumbers' element={AddTwoNumbersComponent()}></Route>
          <Route path='AskingQuestions' element={AskingQuestionsComponent()}></Route>
          <Route path='OddOrEven' element={OddOrEvenComponent()}></Route>
          <Route path='GreaterThanOrLessThan' element={GreaterThanOrLessThanComponent()}></Route>
          <Route path='Madlib' element={MadlibComponent()}></Route>
          <Route path='ReverseIt' element={ReverseItComponent()}></Route>
          <Route path='StudentDirectory' element={StudentDirectoryComponent()}></Route>
          <Route path='RestaurantPicker' element={RestaurantPickerComponent()}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;