CREATE DATABASE habit;
USE habit;

CREATE TABLE users (
	id		 INTEGER PRIMARY KEY AUTO_INCREMENT,
	nickname VARCHAR(255) NOT NULL,
	email	 VARCHAR(255)
) CHARACTER SET utf8;

CREATE TABLE habits (
    id       INTEGER PRIMARY KEY,
    item     VARCHAR(255) NOT NULL
) CHARACTER SET utf8;

CREATE TABLE records (
	id		 INTEGER PRIMARY KEY AUTO_INCREMENT,
    user_id  INTEGER,
    habit_id INTEGER,
    day      DATE,
    num      INTEGER,
--  done     BOOLEAN, -- 습관을 했을 때만 입력하므로, done은 사실상 무의미한 컬럼인 것으로 보인다.
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (habit_id) REFERENCES habits(id)
) CHARACTER SET utf8;

SHOW TABLES;

INSERT INTO users (nickname, email) VALUES("goT","goT@gmail.com");
INSERT INTO users (nickname, email) VALUES("david","david@gmail.com");

INSERT INTO habits (id, item) VALUES(1, "READING");
INSERT INTO habits (id, item) VALUES(2, "WORKOUT");
INSERT INTO habits (id, item) VALUES(3, "CLEANING");

INSERT INTO records (user_id, habit_id, day, num) VALUES(1, 1, '2021-07-06', 10);
INSERT INTO records (user_id, habit_id, day, num) VALUES(2, 1, '2021-07-06', 33);
INSERT INTO records (user_id, habit_id, day, num) VALUES(2, 1, '2021-07-07', 24);
INSERT INTO records (user_id, habit_id, day, num) VALUES(1, 2, '2021-07-07', 80);
INSERT INTO records (user_id, habit_id, day, num) VALUES(2, 1, '2021-07-09', 70);
INSERT INTO records (user_id, habit_id, day, num) VALUES(2, 1, '2021-07-13', 25);

SELECT * FROM users;
SELECT * FROM habits;
SELECT * FROM records;

/* 각 유저의 여러 습관들을 어떤 테이블 구조로 나타낼 것인가?
(1) users 테이블에 습관1, 습관2, ... 습관10 컬럼을 만들고, 각 컬럼에는 미리 만들어진 습관 유형 중 하나를 선택(ex. david[습관1] = READING_BOOKS)
    그리고 records 테이블에서, habit_id를 foreign key로 하여 습관1, ... 습관10 중 하나의 값을 참조함
    장점 : 여러 사람들을 비교할 때, 동일한 습관임을 판단하기 쉬움

(2) habit category 테이블을 별도로 만들어서, 모든 습관 유형 리스트를 저장해놓음.
    (유저가 신규로 추가하는 습관이 있을 수도 있는데, 이에 대한 처리는 추가로 고민해보기.)
    
    records 테이블에서는 habit_id가 이 habit category 테이블 상의 번호를 가리키고, done/num 중 하나에 (혹은 둘 다에) 값을 기록

    (2)-a. habit category 테이블의 컬럼을 habit_id, habit_content로 해서, (1, 'reading books'), (2, 'squat') 등으로 고정된 데이터를 저장하는 방법도 가능할 것 같다.
    (2)-b. 습관 유형 번호 매핑 정보는 API 코드에다 주석으로만 적어두고, 테이블 상에서는 추상화된 숫자로만 표현하는 것도 방법일 것 같다.
*/

/* 통계 자료는 어떻게 표현할 것인가?
(1) statistics 테이블을 만들어서, user_id, habit_id, month & average, total 등을 기록하는 방법.
    이렇게 할 경우... month&average를 갖고 있는 행, total을 갖고 있는 행이 분리되어야 할 것 같은데...? 어딘가 어색함

    별도의 테이블을 만들려는 이유 : 통계 쿼리를 날릴 때마다 DB를 조회해서 연산하는 것은 부하가 클 것으로 생각되어...
        캐싱 개념을 적용하여 일정 주기(?)마다 캐싱을 하고, 업데이트 여부를 변수에 기록하여, 업데이트 된 상태면 statistics 테이블에 저장된 값을 빠르게 읽어오기 위함.

(2) 별도의 테이블을 만들지 않고, raw data만 저장해놓다가, 통계 쿼리를 날려서 그때 그때 조회 및 연산을 하는 방법.


*/

-- single-line comment
/* multi-line comment */
