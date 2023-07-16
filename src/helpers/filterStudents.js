const filterStudents = (data) => {
    let { javaScript = [], backEnd = [], checkListJavaScript = [], frontEnd = [], fullStack = [], admin = [] } = data || [];
    javaScript = javaScript.map((item => ({ ...item, key: item.id })))
    backEnd = backEnd.map((item => ({ ...item, key: item.id })))
    checkListJavaScript = checkListJavaScript.map((item => ({ ...item, key: item.id })))
    frontEnd = frontEnd.map((item => ({ ...item, key: item.id })))
    fullStack = fullStack.map((item => ({ ...item, key: item.id })))
    admin = admin.map((item => ({ ...item, key: item.id })))
    return { admin, javaScript, backEnd, checkListJavaScript, frontEnd, fullStack }
}

export { filterStudents };