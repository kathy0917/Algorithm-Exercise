function solution(id_list, report, k) {
    const setReport = [...new Set(report)];//동일한 유저에 대한 신고 1회처리 
    const reportCntArr = Array(id_list.length).fill(0); //신고 횟수
    const mailCntArr = Array(id_list.length).fill(0); //메일 발송 횟수
    const stopIdArr = [];
    
  
    for(let i of setReport){
        let reported =  i.split(" ")[1];
    
        reportCntArr[id_list.indexOf(reported)] += 1;
    
    if(reportCntArr[id_list.indexOf(reported)] >= k){
        stopIdArr.push(reported);
    }
    }
    
    for(let i of setReport){
        let reporter =  i.split(" ")[0];
        let reported =  i.split(" ")[1];
        
        if(stopIdArr.indexOf(reported) != -1){
            mailCntArr[id_list.indexOf(reporter)] += 1;
            
        }
    }
    
    return mailCntArr;
}
