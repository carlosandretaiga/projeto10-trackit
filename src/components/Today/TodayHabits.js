import { ReactComponent as CheckImg } from "../../assets/images/checkbox.svg";


import { ContainerHabit, ContainerText, } from "./styles";

export default function TodayHabits ({habit, CheckUncheck}) {

    const curDays = habit.currentSequence; 
    const higDays = habit.highestSequence; 
    const seqAtual = 
        curDays > 1 || curDays === 0 ? `${curDays} dias` : `${curDays} dia`;
    const record = 
        higDays > 1 || higDays === 0 ? `${higDays} dias` : `${higDays} dia`; 

    function doneOrNot(id, done) {
        if(done) {
            CheckUncheck(id,false); 
        } else {
            CheckUncheck(id,true); 
        }
    }

    return (
        <ContainerHabit fill={habit.done ? "#8FC549" : "#EBEBEB"}>
          <ContainerText>
            <h2>{habit.name}</h2>
            <h3>
              Sequência atual:
              <strong color={habit.done ? "#8FC549" : "#666666;"}>
                {seqAtual}
              </strong>
            </h3>
            <h3>
              Seu recorde:
              <strong
                color={
                  curDays >= higDays && curDays !== 0
                    ? "#8FC549"
                    : "#666666;"
                }
              >
                {record}
              </strong>
            </h3>
          </ContainerText>
          <div onClick={()=>doneOrNot(habit.id,habit.done)}>
          <CheckImg/>
          </div>
        </ContainerHabit>
      );
}

