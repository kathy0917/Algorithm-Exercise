function solution(new_id) {
    let answer = '';

    //1. 대문자 -> 소문자 치환
    new_id = new_id.replace(/[A-Z]/g , x => x.toLowerCase());

    //2. 알파벳 소문자/ - / _ / . 제외한 문자 제거 
    new_id = new_id.replace(/[^a-z0-9-_\.]/g , "");

    //3. . 2번이상 연속되면 하나로 치환
    new_id = new_id.replace(/[\.]{2,}/g , ".");

    //4. . 처음이나 끝에 위치하면 제거 
    if(new_id[0] === ".") new_id = new_id.substring(1); 
    if(new_id[new_id.length-1] === ".") new_id = new_id.substring(0, new_id.length-1);

    //5. 빈 문자열이면 a대입 
    if(new_id.length === 0) new_id = "a";

    //6. 길이 첫 15개까지 짜르기 -> 마지막 문자가 마침표이면 마침표 제거 
    if(new_id.length >=16) new_id = new_id.substring(0, 15);
    if(new_id[new_id.length-1] === ".") new_id = new_id.substring(0, new_id.length-1);

    //7. 2자 이하이면 마지막 문자를 길이가 3이 될때까지 붙이기
    if(new_id.length <=2){
        while(true){
            new_id += (new_id[new_id.length-1]);
            if(new_id.length === 3) break;
        }
    }

    answer = new_id;

    return answer;
}
