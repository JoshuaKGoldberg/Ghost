import {BaseEvent} from '../../common/event.base';
import {Activity} from './activity.entity';

type ActivityEventData = {
    activity: Activity
}

export class ActivityEvent extends BaseEvent<ActivityEventData> {
    static create(activity: Activity) {
        return new ActivityEvent({activity});
    }
}
