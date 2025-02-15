# TruckSim Telemetry to TXT
A simple tool to get telemetry data from ETS2 and ATS written to a text file

## Prerequisites
Download and install the 󠀠󠀠󠀠󠀠[scs-sdk-plugin](https://github.com/RenCloud/scs-sdk-plugin) by [RenCloud](https://github.com/RenCloud) in your ETS2 and/or ATS plugins folder

## How to use
Create a `template.txt` file with the desired content
Example
```txt
Truck: {truck.make.name} {truck.model.name}
Speed: {truck.speed.kph} km/h
Destination: {job.destination.city.name} {job.destination.company.name}
Cargo: {job.cargo.name}
```

Run the executable with the specified template and output file.<br/>
Example: `./trucksim-telemetry-to-txt.exe --template-path ./template.txt --output-path ./output.txt`

## Options
`--template-path <path>`  Path to template<br/>
`--output-path <path>`    Path to output text file<br/>
`--interval <number>`     Update interval in milliseconds<br/>

## Typedefs
A list of typedefs that can be used in the template file can be found [here](typedefs.js)