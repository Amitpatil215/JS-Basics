let myTodos = {
    day: 'monday',
    meetings: 0,
    meetDone: 0,

    //methods
    addMeetings: function (meetCount) {
        this.meetings = this.meetings + meetCount;
    },
    reset: function () {
        this.meetings = 0,
            this.meetDone = 0
    },

    summery: function () {
        console.log(`On ${this.day} you have ${this.meetings} left`);
    },

}
myTodos.addMeetings(5)
myTodos.summery()