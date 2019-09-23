var event, ok;

do {//Выводим первый вопрос
	ok = false;
	event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
	if (event == -1) {
		break;
	}
	else {
		ok = isAnswer(works.a0, event);
	}
} while (!ok);
switch (event) {
	case 1: // Первое действие - если в первом окне ввели 1 то открываем серию окно - окно 2
	     do {
	     	ok = false;
	     	event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
	     	if (event == -1) {
	     		break;
	     	}
	     	else {
	     		ok = isAnswer(works.b0, event);
	     	}
	     } while (!ok);
	     switch (event) {
	     	case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
	     	     do {
	     	     	ok = false;
	     	     	event = +promt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
	     	     	if (event == -1) {
	     	     		break;
	     	     	}
	     	     	else {
	     	     		ok = isAnswer(works.d0, event);
	     	     	}
	     	     } while (!ok);

	     	     break;




}