import React, { useState } from "react";
import { Info } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { useTree } from "@/contexts/tree-context";

interface TreeNode {
  id: number;
  name: string;
  hexColor?: string;
  birth?: number;
  death?: number;
  info?: boolean;
  children?: TreeNode[];
}

interface CustomNodeProps {
  nodeDatum: TreeNode;
  onClick: (nodeDatum: TreeNode, evt: React.MouseEvent) => void;
}

const CustomNode: React.FC<CustomNodeProps> = ({ nodeDatum, onClick }) => {
  const birth = nodeDatum.birth;
  const death = nodeDatum.death;
  const hasDates = birth || death;
  const dateString = hasDates ? `${birth || "?"} – ${death || "?"}` : "";
  const { user } = useAuth();
  const { setOpen, setSelectedPersonId } = useTree();
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleInfoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedPersonId(nodeDatum.id.toString());
    setOpen(true);
  };

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (user?.role?.id && user.role.id <= 1) {
      toast.error("Құқықтарыңыз жетіспейді" + user.role.id);
      return;
    }
    setSelectedPersonId(nodeDatum.id.toString());
    setOpen(true);
  };

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  // Динамические стили для плавных переходов
  const nodeStyle = {
    width: "120px",
    height: "55px",
    borderRadius: "12px",
    backgroundColor: isPressed ? "#8fb85c" : isHovered ? "#b8d479" : "#a5c86c",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "14px",
    cursor: "pointer",
    boxShadow: isPressed 
      ? "0 2px 4px rgba(0,0,0,0.2), inset 0 2px 4px rgba(0,0,0,0.1)" 
      : isHovered 
        ? "0 6px 12px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.1)" 
        : "0 2px 6px rgba(0,0,0,0.1)",
    userSelect: "none" as const,
    padding: "4px",
    transform: isPressed ? "scale(0.95)" : isHovered ? "scale(1.05)" : "scale(1)",
    transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    border: isHovered ? "2px solid rgba(255,255,255,0.3)" : "2px solid transparent",
  };

  const infoIconStyle = {
    cursor: "pointer",
    opacity: isHovered ? 1 : 0.8,
    transform: isHovered ? "scale(1.1)" : "scale(1)",
    transition: "all 0.2s ease-in-out",
  };

  return (
    <foreignObject width={120} height={80} x={-60} y={-40}>
      <div
        onClick={(e) => onClick(nodeDatum, e)}
        onContextMenu={handleRightClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setIsPressed(false);
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        style={nodeStyle}
      >
        <div className="flex gap-3 items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <div 
              className="text-center text-sm" 
              style={{ 
                lineHeight: "12px",
                transition: "all 0.2s ease-in-out",
                textShadow: isHovered ? "0 1px 2px rgba(0,0,0,0.2)" : "none"
              }}
            >
              {nodeDatum.name}
            </div>
            {hasDates && (
              <div 
                style={{ 
                  fontSize: "10px", 
                  fontWeight: "lighter", 
                  marginTop: 2,
                  transition: "all 0.2s ease-in-out",
                  opacity: isHovered ? 1 : 0.9
                }}
              >
                {dateString}
              </div>
            )}
          </div>
          {nodeDatum.info && (
            <Info 
              size={16} 
              color="#fff" 
              onClick={handleInfoClick} 
              style={infoIconStyle}
            />
          )}
        </div>
      </div>
    </foreignObject>
  );
};

export default CustomNode; 