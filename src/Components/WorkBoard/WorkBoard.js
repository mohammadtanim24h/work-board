import React from "react";

const WorkBoard = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-blue-500 text-left mt-3">
                Work Board
            </h2>
            {/* Work Board */}
            <div className="mt-4">
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th className="text-lg font-bold">To Do</th>
                                <th className="text-lg font-bold">
                                    In Progress
                                </th>
                                <th className="text-lg font-bold">Done</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default WorkBoard;
