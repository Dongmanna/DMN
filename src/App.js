import ButtonChat from "./components/ButtonChat";
import ButtonGray from "./components/ButtonGray";
import ButtonGreen from "./components/ButtonGreen";
import ButtonGreenA from "./components/ButtonGreenA";
import ButtonWhite from "./components/ButtonWhite";
import SearchBar from "./components/SearchBar";
import SearchBarResult from "./components/SearchBarResult";

function App() {
  return (
    <div className="App">
      SearchBar
      <SearchBar size="" onClick=""/>
      <br />
      SearchBar size="S" 
      <SearchBar size="S" onClick=""/>  {/* onclick에 들어갈 함수 나중에 작성해서 사용 , size="S"면 헤더용*/}
      <br />
      SearchBarResult
      <SearchBarResult></SearchBarResult>
      ButtonGreen
      <ButtonGreen onClick="">작성하기!</ButtonGreen>
      <br /><br />
      ButtonGreenA
      <ButtonGreenA function1="" function2="" secondText="채팅방 입장!">참가하기!</ButtonGreenA>
      <br /><br />
      ButtonGray
      <ButtonGray onClick="">참가취소</ButtonGray>
      <br /><br />
      ButtonWhite
      <ButtonWhite onClick="">구매완료</ButtonWhite>
      <br /><br />
      ButtonChat
      <ButtonChat>채팅방 입장</ButtonChat>
    </div>
  );
}

export default App;
