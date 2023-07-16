import moment from 'moment'
const inactiveStudentFnc = (dateLastActivity, days) => {
    const countInactiveDays = moment().diff(moment(dateLastActivity), 'days')
    return countInactiveDays >= days
}

export { inactiveStudentFnc };
