const reducer = (oldstate, action) => {

    switch (action.type){

//Adding successful record to the state
        case "ADD_RECORD":
            let newRecords = [action.record,...oldstate.records]
            return {...oldstate,records: newRecords}

//Set the active record            
        case "ACTIVE_REC":
            let oldRec = JSON.parse(JSON.stringify(oldstate.records[parseInt(action.recordId)]))
            let editingrec = JSON.parse(JSON.stringify(oldstate.records[parseInt(action.recordId)]))
            return {...oldstate,recordId:action.recordId,oldRecord:oldRec,edit:!oldstate.edit,activeRecord:oldstate.records[parseInt(action.recordId)],edittingrec:editingrec}

//Update a record
        case "UPDATE_RECORD":
            let newRecs = oldstate.records.map((rec,id) => {
                if(id === parseInt(action.idx)){
                    for(const key in (action.record)){
                        rec[key] = action.record[key]
                    }
                }
                return rec
            })
            return {...oldstate,records:newRecs,activeRecord:JSON.parse(JSON.stringify(oldstate.records[parseInt(action.recordId)]))}

//Default Action
        default:
            return oldstate;
    }
}
export default reducer;