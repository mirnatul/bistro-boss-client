/**
 * 1. do not show the link to them who should not see it. - condition admin or not
 * 2. do not allow to visit the link by typing on the url in client. If not admin redirect to another page or logout etc. - admin route
 * 
 * 
 * To send data
 * 1. verify jwt token - send authorization token in the header. If possible use axios to send jwt token by intercepting the request.
 * 2. if it is an admin activity. make sure only admin user is posting data - by using verifyAdmin
 */