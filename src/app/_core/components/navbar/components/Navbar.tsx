"use client";

import { cn } from 'cn';
import { LucideIcon, Settings, CodeXml, Palette, Home, ClipboardList, Warehouse, CalendarClock } from "lucide-react";
import { usePathname } from "next/navigation";

const routes = {
    home: "/home",
    orders: "/orders",
    timesheets: "/timesheets",
    blueprints: "/blueprints",
    development: "/development",
    settings: "/settings",
    warehouse: "/warehouse",
}

export function Navbar() {
    const redirect = useHandleRouteChange()
    const pathname = usePathname();

    return (
        <div className={cn(
            "w-64 h-full rounded-4xl p-4",
            "flex flex-col shrink-0 justify-between",
            "bg-sidebar text-foreground",
        )}>
            <div className={cn("flex flex-col gap-8")}>
                <div className="flex flex-col gap-8">
                    <SidebarOptionsGroup>
                        <SidebarOption option="Home"
                            icon={Home}
                            active={pathname.startsWith(routes.home)}
                            visible={false}
                            onClick={() => {
                                redirect(routes.home);
                            }} />
                        <SidebarOption option="Commesse"
                            icon={ClipboardList}
                            active={pathname.startsWith(routes.orders)}
                            onClick={() => {
                                redirect(routes.orders);
                            }} />
                        {/* <SidebarOption option="Rapportini"
                            icon={CalendarClock}
                            active={pathname.startsWith(routes.timesheets)}
                            onClick={() => {
                                redirect(routes.timesheets);
                            }} /> */}
                        <SidebarOption option="Magazzino"
                            icon={Warehouse}
                            active={pathname.startsWith(routes.warehouse)}
                            visible={false}
                            onClick={() => {
                                redirect(routes.warehouse);
                            }} />
                    </SidebarOptionsGroup>
                    <SidebarOptionsGroup title="Azioni">
                        <SidebarOption option="Schemistica"
                            icon={Palette}
                            active={pathname.startsWith(routes.blueprints)}
                            onClick={() => {
                                redirect(routes.blueprints);
                            }} />
                        <SidebarOption option="Sviluppo"
                            icon={CodeXml}
                            active={pathname.startsWith(routes.development)}
                            onClick={() => {
                                redirect(routes.development);
                            }} />
                    </SidebarOptionsGroup>
                </div>
            </div>
            <SidebarOption
                option="Impostazioni"
                icon={Settings}
                active={pathname === routes.settings}
                onClick={() => {
                    redirect("/settings");
                }} />
        </div>
    );
}

interface SidebarOptionProps {
    option: string;
    icon?: LucideIcon;
    active: boolean;
    visible?: boolean;
    onClick?: () => void;
}

function SidebarOption({ option, icon: Icon, active, onClick, visible = true }: SidebarOptionProps) {
    return (
        <button
            type="button"
            className={cn(
                "w-full flex items-center gap-4 px-4 py-2",
                "font-normal cursor-pointer",
                "hover:bg-accent dark:hover:bg-accent/80 rounded-2xl",
                active && "bg-accent",
                !visible && "hidden",
            )}
            onClick={onClick}
        >
            {Icon && <Icon className="w-5 h-5" />}
            <span>{option}</span>
        </button>
    );
}

interface SidebarOptionsGroupProps {
    title?: string;
    children: React.ReactNode;
}

function SidebarOptionsGroup({ title, children }: SidebarOptionsGroupProps) {
    return (
        <div className={cn(
            "w-full flex flex-col gap-2",
            "sans-serif font-medium"
        )}>
            {title && (
                <div className="px-2">
                    {title ?? ""}
                </div>
            )}
            <div className="options">
                {children}
            </div>
        </div>
    )
}