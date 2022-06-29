function solution(lottos, win_nums) {
    let answer = [];
    
    //순위 배열 [1위,2위,3위,4위,5위] 그외는 6위
    const ranking = [6,5,4,3,2];
    let zeroCnt = 0;
    let minRank = 0;
    
    //로또 번호와 lottos 번호 겹치는 개수 구하기 -> 최저 순위
    lottos.map(num=>{
        
        if(num === 0) zeroCnt+=1; 
        if(win_nums.indexOf(num)>-1) minRank+=1;
    })
    
    //0의 개수 + 위에서 구한 겹치는 개수 -> 최고 순위
    let maxRank = zeroCnt + minRank;
    
    let minAnswer = ranking.indexOf(minRank)+1;
    let maxAnswer = ranking.indexOf(maxRank)+1;

    answer.push( maxAnswer > 0 ? maxAnswer : 6);
    answer.push( minAnswer > 0 ? minAnswer : 6);
    
    return answer;
}
