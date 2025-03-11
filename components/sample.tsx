"use client";

export default function Sample() {
  return (
    <div className="flex flex-col w-full h-full bg-gray-50 p-6 rounded-lg shadow-sm">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
        <p className="text-gray-500">Welcome to your admin dashboard</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {/* Summary Cards */}
        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <h3 className="text-lg font-medium text-gray-700">Total Users</h3>
          <p className="text-3xl font-bold text-blue-600">1,234</p>
          <p className="text-sm text-green-500 mt-1">↑ 12% from last month</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <h3 className="text-lg font-medium text-gray-700">Revenue</h3>
          <p className="text-3xl font-bold text-blue-600">$8,540</p>
          <p className="text-sm text-green-500 mt-1">↑ 8% from last month</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <h3 className="text-lg font-medium text-gray-700">Active Products</h3>
          <p className="text-3xl font-bold text-blue-600">57</p>
          <p className="text-sm text-red-500 mt-1">↓ 3% from last month</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <h3 className="text-lg font-medium text-gray-700">Support Tickets</h3>
          <p className="text-3xl font-bold text-amber-500">12</p>
          <p className="text-sm text-gray-500 mt-1">5 require attention</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Recent Activity - First Column */}
        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Activity</h2>
          <ul className="space-y-3">
            {[
              { user: "John Doe", action: "Created a new product", time: "2 hours ago" },
              { user: "Sarah Smith", action: "Updated inventory", time: "5 hours ago" },
              { user: "Michael Brown", action: "Processed refund #1234", time: "Yesterday" },
              { user: "Emily Jones", action: "Added new category", time: "Yesterday" }
            ].map((item, index) => (
              <li key={index} className="py-2 border-b border-gray-100 last:border-0">
                <p className="font-medium text-gray-800">{item.user}</p>
                <p className="text-gray-600">{item.action}</p>
                <p className="text-sm text-gray-400">{item.time}</p>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Quick Actions - Second Column */}
        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: "Add Product", icon: "+" },
              { name: "View Orders", icon: "→" },
              { name: "Manage Users", icon: "👥" },
              { name: "Generate Report", icon: "📊" }
            ].map((action, index) => (
              <button 
                key={index}
                className="flex items-center justify-center p-3 bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-600 rounded-lg border border-gray-200 transition-colors"
              >
                <span className="mr-2">{action.icon}</span>
                <span>{action.name}</span>
              </button>
            ))}
          </div>
          
          {/* Added Content - Sales Performance */}
          <div className="mt-6">
            <h3 className="font-semibold text-gray-700 mb-2">Sales Performance</h3>
            <div className="space-y-2">
              {[
                { label: "Electronics", value: 65, color: "bg-blue-500" },
                { label: "Clothing", value: 42, color: "bg-green-500" },
                { label: "Home Goods", value: 28, color: "bg-purple-500" }
              ].map((item, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>{item.label}</span>
                    <span className="font-medium">${item.value}k</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${item.color}`} 
                      style={{ width: `${(item.value / 80) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Added Right Column Content - Third Column */}
        <div className="space-y-6">
          {/* Calendar/Schedule */}
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Upcoming Schedule</h2>
            <ul className="space-y-3">
              {[
                { title: "Team Meeting", time: "Today, 2:00 PM", type: "Meeting" },
                { title: "Product Launch", time: "Tomorrow, 10:00 AM", type: "Event" },
                { title: "Q1 Review", time: "Mar 15, 9:00 AM", type: "Meeting" },
                { title: "Inventory Check", time: "Mar 16, 11:30 AM", type: "Task" }
              ].map((event, index) => (
                <li key={index} className="flex items-start py-2 border-b border-gray-100 last:border-0">
                  <div className={`w-3 h-3 mt-1 rounded-full mr-3 ${
                    event.type === "Meeting" ? "bg-blue-500" : 
                    event.type === "Event" ? "bg-purple-500" : "bg-green-500"
                  }`}></div>
                  <div>
                    <p className="font-medium text-gray-800">{event.title}</p>
                    <p className="text-sm text-gray-500">{event.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          {/* System Status */}
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">System Status</h2>
            <div className="space-y-3">
              {[
                { service: "Database", status: "Operational", statusColor: "text-green-500" },
                { service: "API", status: "Operational", statusColor: "text-green-500" },
                { service: "Storage", status: "Degraded", statusColor: "text-amber-500" },
                { service: "Payments", status: "Operational", statusColor: "text-green-500" }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                  <span className="text-gray-700">{item.service}</span>
                  <span className={`font-medium ${item.statusColor}`}>{item.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}