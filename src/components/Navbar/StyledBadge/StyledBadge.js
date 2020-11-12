import { withStyles } from '@material-ui/core/styles'; 
import { Badge } from '@material-ui/core';

export const OnlineStyledBadge = withStyles(() => ({
    badge: {
        backgroundColor: '#44b700',
        width: '12px',
        height: '12px',
        borderRadius: '12px',
        border: '1px solid white',
    }
}))(Badge);

export const OfflineStyledBadge = withStyles(() => ({
    badge: {
        backgroundColor: '#fafafa',
        width: '12px',
        height: '12px',
        borderRadius: '12px',
        border: '2px solid #424242',
    }
}))(Badge);

export const MeetingStyledBadge = withStyles(() => ({
    badge: {
        backgroundColor: '#f44336',
        width: '12px',
        height: '12px',
        borderRadius: '12px',
        border: '1px solid white',
    }
}))(Badge);

