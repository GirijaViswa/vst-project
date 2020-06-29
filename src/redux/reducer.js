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
            // return {...oldstate,recordId:action.recordId,oldRecord:oldRec,edit:!oldstate.edit,activeRecord:oldstate.records[parseInt(action.recordId)]}
            // return {...oldstate,recordId:action.recordId,oldRecord:oldRec,edit:!oldstate.edit,activeRecord:oldRec}

//Reset the active record to its initial value
        case "RESET_ACTIVE_REC":
            return {...oldstate,recordId:'',edit:!oldstate.edit,errors:{"email":'',"password":'',"zipcode":'',"firstname":''},activeRecord:'',oldRecord:{}}

//Holds the intermediate changes made to the record
        case "CANCEL_RECORD":
            // debugger
            let rec = oldstate.oldRecord
            let recs = oldstate.records.map((rec,id) => {
                if(id === parseInt(action.idx)){
                    // debugger
                    rec = JSON.parse(JSON.stringify(oldstate.oldRecord))
                }
                return rec
            })
            let oldRec1 = JSON.parse(JSON.stringify(oldstate.records[parseInt(action.recordId)]))
            let editingrec1 = JSON.parse(JSON.stringify(oldstate.records[parseInt(action.recordId)]))
            return {...oldstate,records:recs,activeRecord:rec,oldRecord:oldRec1,edittingrec:editingrec1}

//Update a record
        // case "UPDATE_RECORD":
        //     let newRecs = oldstate.records.map((rec,id) => {
        //         if(id === parseInt(action.idx)){
        //             // debugger
        //             rec[action.fieldname] = action.value 
        //         }
        //         return rec
        //     })
        //     return {...oldstate,records:newRecs}
        case "UPDATE_RECORD":
            let newRecs = oldstate.records.map((rec,id) => {
                if(id === parseInt(action.idx)){
                    // debugger
                    for(const key in (action.record)){
                        rec[key] = action.record[key]
                    }
                }
                return rec
            })
            // debugger
            return {...oldstate,records:newRecs,activeRecord:JSON.parse(JSON.stringify(oldstate.records[parseInt(action.recordId)]))}

//Default Action
        default:
            return oldstate;
    }
}
export default reducer;