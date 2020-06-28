const reducer = (oldstate, action) => {
    console.log("oldstate",oldstate)
    console.log("action",action)

    switch (action.type){

//Adding successful record to the state
        case "ADD_RECORD":
            // debugger
            let newRecords = [action.record,...oldstate.records]
            // let newRecords = oldstate.records.push(action.record)
            // debugger
            // let newRecords = oldstate.records.unshift(action.record)
            // let newRecords = oldstate.records.concat(action.record)
            return {...oldstate,records: newRecords}
        case "ACTIVE_REC":
            // debugger
            return {...oldstate,recordId:action.recordId}
        case "ALTER_RECORD":
            // debugger
            // let editRecord = oldstate.records[parseInt(action.idx)]
            // editRecord[action.fieldname] = action.value 
            // // oldstate.records.splice(parseInt(action.idx),1,editRecord)

            // // oldstate.records.splice(parseInt(action.idx),0)
            // // oldstate.records.splice(parseInt(action.idx),1,editRecord)

            // oldstate.records[parseInt(action.idx)] = editRecord;
            // let newRec = [oldstate.records];
            // debugger
            // return {...oldstate,records:newRec};

                
            // let newRec = [oldstate.records];
            // let editRecord = newRec[parseInt(action.idx)]
            // editRecord[action.fieldname] = action.value 

            // newRec[parseInt(action.idx)] = editRecord;
            // return {...oldstate,records:newRec};

            let editRecord = oldstate.records[parseInt(action.idx)]
            editRecord[action.fieldname] = action.value
            Object.assign(oldstate.records[parseInt(action.idx)],editRecord) 
            return {...oldstate,records:oldstate.records}

//Default Action
        default:
            return oldstate;

    }
}
export default reducer;